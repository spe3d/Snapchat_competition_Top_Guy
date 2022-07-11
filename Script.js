//// -----JS CODE-----
// @input Component.ObjectTracking tracker
// @input SceneObject WorldObjectController
// @input SceneObject HGU_hat
// @input SceneObject sky_all
// @input Component.Image animation

script.WorldObjectController.enabled = true
script.HGU_hat.enabled = false
script.sky_all.enabled = false
script.animation.enabled = false;
script.animation.getMaterial(0).mainPass.baseTex.control.stop();

var count = 0
var delayedEvent = script.createEvent("DelayedCallbackEvent");

function triggerResponse() {
    count ++
    delayedEvent.bind(function(eventData)
    {
        script.WorldObjectController.enabled = false
        script.HGU_hat.enabled = true
        script.sky_all.enabled = true
    });

    if(count == 1) {
        script.animation.enabled = true;
        script.animation.getMaterial(0).mainPass.baseTex.control.play(1, 0);
    }
    delayedEvent.reset(1);
}

script.tracker.registerDescriptorStart("thumb", triggerResponse)
