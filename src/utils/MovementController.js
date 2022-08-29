import { Quaternion, Vector3 } from "three";

const directions = ["w", "a", "s", "d"];
const shift = "shift";

class MovementController {
  rotateQuarternion = new Quaternion();
  rotateAngle = new Vector3(0, 1, 0);
  walkDirection = new Vector3();
  camVec = new Vector3();
  runVelocity = 5;
  walkVelocity = 2;

  fadeDuration = 0.2;
  constructor(modelRef, orbitControls, animationMap, mixer, currentAction) {
    this.currentAction = currentAction;
    this.animationMap = animationMap;
    this.mixer = mixer;
    this.model = modelRef;
    this.orbitControls = orbitControls;

    this.animationMap.forEach((value, key) => {
      if (key === currentAction) {
        value.play();
      }
    });

    this.orbitControls.target.set(0, 1, 0);
  }

  update(delta, keysPressed, camera) {
    const directionPressed = directions.some(
      (key) => keysPressed[key] === true
    );
    const isShiftPressed = keysPressed[shift];
    //simple state machine
    var play = "";
    if (directionPressed && isShiftPressed) {
      play = "Running";
    } else if (directionPressed) {
      play = "Walking";
    } else {
      play = "Idle";
    }

    if (this.currentAction !== play) {
      const toPlay = this.animationMap.get(play);
      const current = this.animationMap.get(this.currentAction);
      current.fadeOut(this.fadeDuration);
      toPlay.reset().fadeIn(this.fadeDuration).play();

      this.currentAction = play;
    }

    this.mixer.update(delta/100);

    if (this.currentAction === "Running" || this.currentAction === "Walking") {
      //get the standard wasd based angle offset
      var directionOffset = this.#directionOffset(keysPressed);

      const angleBetweenModelAndCamera = Math.atan2(
        camera.position.x - this.model.position.x,
        camera.position.z - this.model.position.z
      );

      // rotate model to face where the camera is looking at and also apply the wasd based angle
      this.rotateQuarternion.setFromAxisAngle(
        this.rotateAngle,
        directionOffset + angleBetweenModelAndCamera
      );
      this.model.quaternion.rotateTowards(this.rotateQuarternion, 0.2);

      // calculate direction vector for choosing which way to translate
      camera.getWorldDirection(this.walkDirection);
      this.walkDirection.y = 0;
      this.walkDirection.normalize();
      this.walkDirection.applyAxisAngle(this.rotateAngle, directionOffset);

      // run/walk velocity
      const velocity =
        this.currentAction === "Running" ? this.runVelocity : this.walkVelocity;
      // move model & camera
      const moveX = this.walkDirection.x * velocity * delta;
      const moveZ = this.walkDirection.z * velocity * delta;

      this.model.position.x -= moveX;
      this.model.position.z -= moveZ;


      camera.position.lerp(this.camVec.set(camera.position.x - moveX, camera.position.y, camera.position.z - moveZ), 1);
      camera.updateProjectionMatrix();

      this.orbitControls.target.set(this.model.position.x, this.model.position.y + 1, this.model.position.z);
    }
  }

  #directionOffset(keysPressed) {
    var directionOffset = 0; // w

    if (keysPressed["s"]) {
      if (keysPressed["d"]) {
        directionOffset = Math.PI / 4; // w+a
      } else if (keysPressed["a"]) {
        directionOffset = -Math.PI / 4; // w+d
      }
    } else if (keysPressed["w"]) {
      if (keysPressed["d"]) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
      } else if (keysPressed["a"]) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
      } else {
        directionOffset = Math.PI; // s
      }
    } else if (keysPressed["d"]) {
      directionOffset = Math.PI / 2; // a
    } else if (keysPressed["a"]) {
      directionOffset = -Math.PI / 2; // d
    }

    return directionOffset;
  }
}



export default MovementController;
