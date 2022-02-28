<template>
    <div class="bg-slate-900">
        <div class="flex w-full items-center justify-around py-4 px-8">
            <div class="flex w-3/5 items-center justify-evenly">
                <nuxt-link to="/" class="px-4 py-4 font-bold text-white"
                    >SnapWork</nuxt-link
                >
                <nuxt-link to="#" class="px-6 py-4 font-medium text-white"
                    >Trending</nuxt-link
                >
                <nuxt-link to="#" class="px-6 py-4 font-medium text-white"
                    >Category</nuxt-link
                >
            </div>
            <div class="flex w-1/5 items-center justify-evenly">
                <nuxt-link
                    to="/login"
                    class="rounded-xl bg-orange-500 px-6 py-2.5 font-semibold text-white shadow-lg transition duration-150 hover:bg-orange-600"
                    >Log In</nuxt-link
                >
                <nuxt-link
                    to="/signup"
                    class="bg-transparent px-6 py-2.5 font-semibold text-white transition duration-150 hover:bg-orange-600"
                    >Sign Up</nuxt-link
                >
            </div>
        </div>
    </div>
    <div class="w-full bg-white">
        <div class="p-20">
            <h1 class="text-3xl font-semibold">Discover</h1>
            <div class="mt-4 flex w-full items-center justify-between gap-8">
                <div
                    class="container flex h-52 w-2/3 items-end rounded-lg bg-blue-500 p-4"
                >
                    <h1 class="text-xl text-white">
                        Find the perfect Freelance service for your business
                    </h1>
                </div>
                <div
                    class="container flex h-52 w-1/3 items-end rounded-lg bg-orange-500 p-4"
                >
                    <h1 class="text-xl text-white">
                        A whole world of freelance talent at your fingertips
                    </h1>
                </div>
            </div>
            <h1 class="mt-12 text-xl font-normal">
                Popular Professional Services
            </h1>
            <h1 class="mt-2 text-sm text-gray-500">
                Dolor sita met sadjn dn sadnjsan dsanj
            </h1>
            <div class="mt-4 flex w-full justify-between gap-8 overflow-scroll">
                <postcard />

                <postcard />

                <postcard />
            </div>
        </div>
    </div>
    <div class="w-full bg-slate-300 p-20">
        <div class="flex w-full items-center justify-around gap-8">
            <div
                class="aspect-video w-1/2 rounded-lg bg-white p-4 shadow-md"
            ></div>
            <div class="w-1/2 p-4">
                <h1 class="text-3xl font-semibold">
                    A whole world of freelance talent at your fingertips
                </h1>
                <h1 class="mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna nibh et in ut in consequat. Placerat amet ultrices
                    alique
                </h1>
            </div>
        </div>
    </div>
    <div class="w-full bg-white p-20">
        <h1 class="text-3xl font-semibold">Explore the Marketplace</h1>
        <div class="mt-12 flex justify-center">
            <div class="aspect-video w-1/3 rounded-lg bg-slate-500 p-8"></div>
        </div>
    </div>

    <div class="w-full bg-slate-300 p-20">
        <div class="flex w-full items-center justify-around gap-8">
            <div
                class="aspect-video w-1/2 rounded-lg bg-white p-4 shadow-md"
            ></div>
            <div class="w-1/2 p-4">
                <h1 class="text-3xl font-semibold">Package Information</h1>
                <h1 class="mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna nibh et in ut in consequat. Placerat amet ultrices
                    alique
                </h1>

                <div
                    class="mt-4 w-32 rounded-lg bg-red-500 p-2 text-white shadow-md"
                >
                    <h1 class="text-center">More</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full bg-white p-20">
        <div class="flex items-center justify-center">
            <div class="w-2/3">
                <h1 class="text-center text-3xl font-semibold">
                    Review Clients
                </h1>
                <div class="mt-4 flex items-center justify-center">
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
                <h1 class="mt-4 text-center text-sm font-normal text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h1>
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
