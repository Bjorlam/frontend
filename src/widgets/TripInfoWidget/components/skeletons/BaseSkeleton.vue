<template>
    <div
        class="bg-primary-100 p-4 rounded-2xl flex flex-col overflow-hidden relative">
        <div
            class="animate-loading blur-xl absolute top-[-100px] left-[-170px] h-[500px] w-6 rotate-45 bg-secondary-300 z-0"></div>

        <div
            class="flex justify-between items-center *:w-36 *:h-7 *:bg-secondary-100 *:rounded">
            <div></div>
            <div class="!w-16 !h-6"></div>
            <div></div>
        </div>
        <div
            class="flex justify-between mt-3 [&>*>*]:bg-secondary-100 [&>*>*]:w-44 [&>*>*]:h-4 *:flex *:flex-col *:space-y-1 [&>*>*]:rounded">
            <div>
                <div></div>
                <div class="!w-40"></div>
            </div>
            <div class="items-end">
                <div></div>
                <div class="!w-40"></div>
            </div>
        </div>
    </div>
</template>
