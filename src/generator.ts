import anime from "animejs"
import { ref } from "vue"

export function useGenerator(props: {states: anime.AnimeParams[]}) {
    const currentPosition = ref(0)
    const states = ref(props.states)

    const generator = function* generateSequence() {
        anime(states.value[0])
        if (currentPosition.value > states.value.values.length + 1) {
            // emit here for resets / change slides
            // currentPosition.value = 0
        } else {
            currentPosition.value++
            yield
        }
    }

    return {
        currentPosition,
        states,
        generator
    }
}