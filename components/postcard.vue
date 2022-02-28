<template>
    <div class="flex items-center justify-center py-1 px-1">
        <div class="rounded bg-white py-4 px-5 shadow-md md:w-96">
            <div class="flex items-start justify-between">
                <div class="mb-4 mr-10 flex items-center lg:mb-0">
                    <div class="mr-3 h-14 w-14 rounded-md bg-cover">
                        <img
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png"
                            alt
                            class="h-full w-full overflow-hidden rounded-full shadow"
                        />
                    </div>
                    <div>
                        <p class="text-sm font-bold leading-4 text-gray-800">
                            {{ name }}
                        </p>
                        <p class="pt-2 text-xs leading-3 text-gray-500">
                            {{ title }}
                        </p>
                    </div>
                </div>
                <div
                    class="relative cursor-pointer"
                    @click="dropdownHandler($event)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-dots"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#A1A1AA"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="5" cy="12" r="1" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                    </svg>
                    <ul
                        class="absolute left-0 top-0 z-40 mt-8 -ml-4 hidden w-32 rounded bg-white py-1 shadow"
                    >
                        <li
                            class="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white"
                        >
                            Landing Pages
                        </li>
                        <li
                            class="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white"
                        >
                            Templates
                        </li>
                        <li
                            class="cursor-pointer py-3 px-3 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-indigo-700 hover:text-white"
                        >
                            Components
                        </li>
                    </ul>
                </div>
            </div>
            <p class="pt-4 text-xs leading-4 text-gray-600">
                {{ description }}
            </p>
            <p class="pt-5 text-xs font-medium leading-3 text-indigo-700">
                CONNECTIONS
            </p>
            <div class="flex items-center pt-2 pb-2.5">
                <div
                    v-for="(connection, idx) in connections"
                    v-bind:key="idx"
                    class="mr-1 h-6 w-6 rounded-full shadow"
                >
                    <img
                        alt="img-1"
                        v-bind:src="connection.img"
                        class="h-full w-full rounded-full object-cover object-center"
                    />
                </div>
            </div>
            <div class="flex items-end justify-end">
                <button
                    class="rounded bg-indigo-700 py-3 px-4 text-xs font-medium leading-3 text-white hover:opacity-90 focus:outline-none"
                >
                    Send a message
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            name: "Steve Doe",
            title: "Sales Representative",
            description:
                "Your Payment was successful. You can now use our services. Check the action below for more details. Thank you",
            connections: [
                {
                    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
                },
                {
                    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
                },
                {
                    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
                },
                {
                    img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
                },
            ],
        };
    },
    methods: {
        dropdownHandler(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
