<template>
    <div class="grid grid-cols-1 grid-rows-1 xl:grid-cols-2 lg:grid-rows-2">
        <div
            class="customContainer overflow-scroll relative flex flex-col gap-4 border border-t-0 border-r-0 border-l-0 xl:border xl:border-t-0 xl:border-l-0 xl:border-r-1 xl:border-b-10 p-10 w-full h-full bg-gray-900 hover:bg-slate-200 text-white hover:text-slate-900 transition-colors">
            <slot name="top-left" />
        </div>
        <div
            class="customContainer overflow-scroll border border-t-0 border-r-0 border-l-0 flex flex-col gap-4 p-10 bg-gray-900 hover:bg-slate-200 text-white hover:text-slate-900 transition-colors">
            <slot name="top-right" />
        </div>
        <div
            class="customContainer overflow-scroll border border-t-0 border-l-0 border-r-0 xl:border xl:border-t-0 xl:border-l-0 xl:border-b-0 flex flex-col gap-4 p-10 bg-gray-900 hover:bg-slate-200  text-white hover:text-slate-900 transition-colors">
            <slot name="bottom-left" />
        </div>
        <div
            class="customContainer overflow-scroll border border-t-0 border-b-0 border-r-0 border-l-0 flex flex-col gap-4 p-10 bg-gray-900 hover:bg-slate-200 text-white hover:text-slate-900 transition-colors">
            <slot name="bottom-right" />
        </div>
    </div>
</template>

<style scoped>
.customContainer {
    overflow-y: scroll;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
}

.customContainer::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
}
</style>