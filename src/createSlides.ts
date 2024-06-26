import anime from "animejs"
import { ref } from "vue"

export function useSlides(props: { states: anime.AnimeInstance[] }) {
    const currentPosition = ref(0)
    const states = props.states

    function revert() {
        console.log(currentPosition.value)
        if (currentPosition.value <= 0) {
            currentPosition.value = 0
            return
        }

        --currentPosition.value

        states[currentPosition.value].reverse();
        states[currentPosition.value].play();
        states[currentPosition.value].finished.then(() => {
            states[currentPosition.value].reverse();

        });


    }

    function callSlide() {
        if (currentPosition.value >= states.values.length + 2) {
            currentPosition.value = states.values.length + 2
            return
        }

        console.log('im bad')

        states[currentPosition.value].play()
        if (currentPosition.value > states.values.length + 1) {
            // emit here for resets / change slides
            // currentPosition.value = 0
        } else {
            currentPosition.value++
        }

    }

    return {
        currentPosition,
        states,
        callSlide,
        revert,
    }
}