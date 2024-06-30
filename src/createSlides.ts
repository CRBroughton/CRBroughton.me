import anime from "animejs"
import { ref } from "vue"

export function useSlides(props: { states: anime.AnimeInstance[] }) {
    const currentPosition = ref(0)
    const states = props.states
    const isRunning = ref(false)

    async function revert() {
        if (currentPosition.value <= 0) {
            currentPosition.value = 0
            return
        }

        --currentPosition.value
        return await new Promise((res, rej) => {
            const duration = states[currentPosition.value].duration

            isRunning.value = true
            states[currentPosition.value].reverse();
            states[currentPosition.value].play();
            states[currentPosition.value].finished.then(() => {
                states[currentPosition.value].reverse();

            });
            setTimeout(() => {
                isRunning.value = false
                res('complete')
            }, duration)
        })
    }

    async function callSlide() {
        return await new Promise((res, rej) => {
            let duration: number = 0
            if (states[currentPosition.value]) {
                duration = states[currentPosition.value].duration 
            }
            if (duration === 0) {
                return
            }

            if (currentPosition.value >= states.length + 1) {
                currentPosition.value = states.length + 1
                return
            }
            isRunning.value = true
            states[currentPosition.value].play()
            if (currentPosition.value >= states.length + 1) {
                // emit here for resets / change slides
                // currentPosition.value = 0
            } else {
                currentPosition.value++
            }
            setTimeout(() => {
                isRunning.value = false
                res('complete')
            }, duration)
        })

    }

    return {
        currentPosition,
        states,
        callSlide,
        revert,
        isRunning
    }
}