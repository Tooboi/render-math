import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-stone-500 hover:text-stone-300 rounded-lg sm:hidden hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-300">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
                <div className="overflow-y-auto py-5 px-3 h-full bg-stone-800 border-r-2 border-stone-700">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-stone-300 rounded-lg hover:bg-stone-700 transition group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdeded" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid-2x2-check"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" /><path d="m16 19 2 2 4-4" /></svg>
                                <span className="ml-3 text-2xl font-semibold">RenderLogic</span>
                            </Link>
                        </li>
                        <li>
                            <button type="button" className="flex items-center p-2 w-full text-base font-normal text-stone-300 rounded-lg hover:bg-stone-700 transition group" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fdeded" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hourglass"><path d="M5 22h14" /><path d="M5 2h14" /><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" /><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" /></svg>
                                <span className="flex-1 ml-3 text-left text-lg font-semibold whitespace-nowrap">Time</span>
                                <svg aria-hidden="true" className="w-6 h-6 text-stone-500 transition duration-75 group-hover:text-stone-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                                <li>
                                    <Link to="/remaining" className="flex items-center p-2 text-base font-normal text-stone-300 rounded-lg hover:border-stone-600 hover:ring-2 ring-stone-600 bg-stone-700 active:ring-stone-700 transition group">Time Remaining</Link>
                                </li>
                                <li>
                                    <Link to="/duration" className="flex items-center p-2 text-base font-normal text-stone-300 rounded-lg hover:border-stone-600 hover:ring-2 ring-stone-600 bg-stone-700 active:ring-stone-700 transition group">Animation Duration</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center p-2 w-full text-base font-normal text-stone-300 rounded-lg hover:bg-stone-700 transition group" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fdeded" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-audio-lines"><path d="M2 10v3" /><path d="M6 6v11" /><path d="M10 3v18" /><path d="M14 8v7" /><path d="M18 5v13" /><path d="M22 10v3" /></svg>
                                <span className="flex-1 ml-3 text-left text-lg font-semibold whitespace-nowrap">Audio</span>
                                <svg aria-hidden="true" className="w-6 h-6 text-stone-500 transition duration-75 group-hover:text-stone-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-sales" className="hidden py-2 space-y-2">
                                <li>
                                    <Link to="bpm" className="flex items-center p-2 text-base font-normal text-stone-300 rounded-lg hover:border-stone-600 hover:ring-2 ring-stone-600 bg-stone-700 active:ring-stone-700 transition group">BPM to FPS</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* <ul className="pt-5 mt-5 space-y-2 border-t border-stone-200 dark:border-stone-700">
                        <li>
                            <Link href="#" className="flex items-center p-2 text-base font-normal text-stone-900 rounded-lg transition duration-75 hover:bg-stone-100 dark:hover:bg-stone-700 dark:text-white group">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-stone-400 transition duration-75 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                                <span className="ml-3">Docs</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-base font-normal text-stone-900 rounded-lg transition duration-75 hover:bg-stone-100 dark:hover:bg-stone-700 dark:text-white group">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-stone-400 transition duration-75 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                <span className="ml-3">Components</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-base font-normal text-stone-900 rounded-lg transition duration-75 hover:bg-stone-100 dark:hover:bg-stone-700 dark:text-white group">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-stone-400 transition duration-75 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                                <span className="ml-3">Help</span>
                            </Link>
                        </li>
                    </ul> */}
                </div>
                {/* <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-stone-800 z-20 border-r border-stone-200 dark:border-stone-700">
                    <Link href="#" className="inline-flex justify-center p-2 text-stone-500 rounded cursor-pointer dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-600">
                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                    </Link>
                    <Link href="#" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-stone-500 rounded cursor-pointer dark:text-stone-400 dark:hover:text-white hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-600">
                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                    </Link>
                    <div id="tooltip-settings" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-stone-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                        Settings page
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div> */}
            </aside>

            <Outlet />
        </>
    )
};

export default Layout;