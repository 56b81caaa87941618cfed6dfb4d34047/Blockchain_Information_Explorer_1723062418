/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723062419", {
    template: `
    <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">

        <nav class="bg-white p-4 shadow-lg">
            <div class="max-w-screen-xl mx-auto flex justify-between items-center">
                <div class="text-black text-2xl font-bold">MyWebsite</div>
                <div class="flex space-x-4">
                    <a href="#" class="text-purple-700 hover:text-purple-900">Home</a>
                    <a href="#" class="text-purple-700 hover:text-purple-900">About</a>
                    <a href="#" class="text-purple-700 hover:text-purple-900">Contact</a>
                </div>
            </div>

            <button id="hello-world-button" class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Hello World</button>
        </nav>
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Discover the Latest in Blockchain</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Stay ahead of the curve with real-time updates on emerging blockchain trends, projects, and innovations.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Explore Blockchain News</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
