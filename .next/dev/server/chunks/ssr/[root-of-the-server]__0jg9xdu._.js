module.exports = [
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Service detail | dynamic route /services/:slug.
 * Now supports both main category pages and individual sub-service pages.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SiteShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SiteShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageHero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const ServiceDetailPageClient = ()=>{
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const svc = slug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getServiceBySlug"])(slug) : undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (slug === "statutory-services") {
            router.replace("/services#statutory");
        } else if (!svc) {
            router.replace("/services");
        }
    }, [
        slug,
        svc,
        router
    ]);
    if (slug === "statutory-services" || !svc) return null;
    const otherServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesCatalogue"].filter((s)=>s.slug !== svc.slug && s.category === svc.category).slice(0, 3);
    // If same-category services are less than 3, fill with other categories
    const moreServices = otherServices.length < 3 ? [
        ...otherServices,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesCatalogue"].filter((s)=>s.slug !== svc.slug && s.category !== svc.category).slice(0, 3 - otherServices.length)
    ] : otherServices;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SiteShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteShell"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                eyebrow: svc.eyebrow,
                title: svc.title,
                subtitle: svc.tagline,
                breadcrumbs: [
                    {
                        label: "Services",
                        href: "/services"
                    },
                    {
                        label: svc.title
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container-page py-16 md:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-12 md:grid-cols-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6
                                    },
                                    src: typeof svc.image === "string" ? svc.image : svc.image.src,
                                    alt: svc.title,
                                    className: "aspect-[16/10] w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-8 text-[16px] font-light leading-relaxed text-muted-foreground",
                                    children: svc.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                svc.detailedContent && svc.detailedContent.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10",
                                        children: [
                                            section.heading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "h-display mb-4 text-[20px] text-primary border-l-[3px] border-accent pl-4",
                                                children: section.heading
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            section.paragraphs?.map((p, pIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-4 text-[15px] font-light leading-relaxed text-muted-foreground",
                                                    children: p
                                                }, pIdx, false, {
                                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            section.list && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: `mb-4 ${section.list.length > 10 ? "grid gap-x-6 gap-y-2 sm:grid-cols-2" : "space-y-2"}`,
                                                children: section.list.map((li, lIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start gap-3 text-[14.5px] text-foreground/85",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: li
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, lIdx, true, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "h-display mt-12 text-[24px] text-primary",
                                    children: "Scope of Work"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-5 space-y-3",
                                    children: svc.scope.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3 text-[14.5px] text-foreground/85",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "h-display mt-12 text-[24px] text-primary",
                                    children: "Deliverables"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-5 space-y-3",
                                    children: svc.deliverables.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3 text-[14.5px] text-foreground/85",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "md:col-span-5 md:pl-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-24 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/grclass-logo.webp",
                                                alt: "GR Class",
                                                className: "h-12 w-auto",
                                                style: {
                                                    filter: "brightness(0) saturate(100%) invert(10%) sepia(60%) saturate(2800%) hue-rotate(200deg) brightness(90%) contrast(100%)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-display text-[16px] font-extrabold tracking-[0.06em] text-primary",
                                                        children: "GR CLASS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] uppercase tracking-[0.14em] text-primary/50",
                                                        children: "Classified for Standards"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border bg-card p-7",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-[11px] font-bold uppercase tracking-[0.18em] text-secondary",
                                                children: "Engagement"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "mt-0.5 h-4 w-4 text-accent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] uppercase tracking-wider text-subtle",
                                                                        children: "Typical duration"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 text-[14px] text-foreground",
                                                                        children: svc.duration
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                className: "mt-0.5 h-4 w-4 text-accent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] uppercase tracking-wider text-subtle",
                                                                        children: "Standards"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "mt-1.5 space-y-1 text-[13.5px] text-foreground",
                                                                        children: svc.certifications.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: [
                                                                                    "· ",
                                                                                    c
                                                                                ]
                                                                            }, c, true, {
                                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                                lineNumber: 157,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "mt-0.5 h-4 w-4 text-accent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[11px] uppercase tracking-wider text-subtle",
                                                                        children: "Contact"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone}`,
                                                                        className: "mt-1 block text-[14px] font-semibold text-accent hover:text-accent-bright transition-colors",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "group mt-7 flex w-full items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-soft",
                                                children: [
                                                    "Request a proposal",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4 transition-transform group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border bg-accent-soft p-7",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] uppercase tracking-wider text-accent",
                                                children: "No obligation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-[13.5px] font-light leading-relaxed text-foreground/80",
                                                children: "Initial scoping conversations are always complimentary. We'll confirm flag-state delegation and outline the workstream within 48 hours."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-border bg-primary p-7",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent",
                                                children: "Reach Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone}`,
                                                        className: "flex items-center gap-3 text-[14px] text-background/80 hover:text-background transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "h-4 w-4 text-accent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].email}`,
                                                        className: "flex items-center gap-3 text-[14px] text-background/80 hover:text-background transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                className: "h-4 w-4 text-accent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].email
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-t border-border bg-secondary-soft py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-page",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow text-secondary",
                            children: "More from our practice"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h-display mt-3 text-[clamp(22px,2vw,30px)] text-primary",
                            children: "Related services"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 grid gap-6 md:grid-cols-3",
                            children: moreServices.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/services/${s.slug}`,
                                    className: "group bg-card border border-border p-7 transition-all hover:border-accent hover:shadow-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow text-secondary",
                                            children: s.eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "h-display mt-3 text-[18px] text-primary",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[13.5px] font-light leading-relaxed text-muted-foreground",
                                            children: s.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 flex items-center gap-1.5 text-[12px] font-semibold text-accent",
                                            children: [
                                                "View Details ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, s.slug, true, {
                                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/[slug]/ServiceDetailPageClient.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ServiceDetailPageClient;
}),
"[project]/src/assets/about-surveyor.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/about-surveyor.18e_ey6nt_rl9.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/about-surveyor.jpg.mjs { IMAGE => \"[project]/src/assets/about-surveyor.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$about$2d$surveyor$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/about-surveyor.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$about$2d$surveyor$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1920,
    height: 1080,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDh47iKBTNJbiYudhVm+XAAI4rnVaTlZHd7CCgpM//Z"
};
}),
"[project]/src/assets/careers-hero.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/careers-hero.29fm88mc4l-6p.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/careers-hero.jpg.mjs { IMAGE => \"[project]/src/assets/careers-hero.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$careers$2d$hero$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/careers-hero.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$careers$2d$hero$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 1000,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkrHxTcQ2oQ20TRoFyo43dc/nWVSMmrKRtTlFauJ//2Q=="
};
}),
"[project]/src/assets/svc-advisory.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-advisory.1f4yr85ckni5j.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-advisory.jpg.mjs { IMAGE => \"[project]/src/assets/svc-advisory.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$advisory$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-advisory.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$advisory$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 768,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCgsF3q7tC8kTJGT5auMbV28dPrROKcboKcnGVmf//Z"
};
}),
"[project]/src/assets/svc-ballast-water.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-ballast-water.0l9194oza9h5f.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-ballast-water.png.mjs { IMAGE => \"[project]/src/assets/svc-ballast-water.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$ballast$2d$water$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-ballast-water.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$ballast$2d$water$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDnv7RtYrSTzI5Q8cRYEMBzjJzUpJsmV7n/2Q=="
};
}),
"[project]/src/assets/svc-cert.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-cert.1z2m_6m2yvbty.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-cert.jpg.mjs { IMAGE => \"[project]/src/assets/svc-cert.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$cert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-cert.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$cert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 768,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCD4efZhpMupW3mxxFdk1uzbgZAB8wJ7Y/KsnuaLY//2Q=="
};
}),
"[project]/src/assets/svc-conversion-projects.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-conversion-projects.03u2pysh-gkis.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-conversion-projects.png.mjs { IMAGE => \"[project]/src/assets/svc-conversion-projects.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$conversion$2d$projects$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-conversion-projects.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$conversion$2d$projects$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDBn8VXTPFIgwgU8L0PPP1pe1nz3uaeyhyWsf/Z"
};
}),
"[project]/src/assets/svc-energy-efficiency.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-energy-efficiency.262mchrywrn0v.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-energy-efficiency.png.mjs { IMAGE => \"[project]/src/assets/svc-energy-efficiency.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$energy$2d$efficiency$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-energy-efficiency.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$energy$2d$efficiency$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCvYfEhzN5M8piYkhWEYKn07cV0Pc51ax//2Q=="
};
}),
"[project]/src/assets/svc-flag-statutory.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-flag-statutory.1e47-vmkxeedp.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-flag-statutory.png.mjs { IMAGE => \"[project]/src/assets/svc-flag-statutory.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$flag$2d$statutory$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-flag-statutory.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$flag$2d$statutory$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwA07xnqWryT4tZ/LQgsYyX57AD86G03uXGzVkj/2Q=="
};
}),
"[project]/src/assets/svc-fleet-in-services.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-fleet-in-services.2-x6g3i7-w9we.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-fleet-in-services.png.mjs { IMAGE => \"[project]/src/assets/svc-fleet-in-services.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$fleet$2d$in$2d$services$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-fleet-in-services.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$fleet$2d$in$2d$services$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCjb/EiRIsuxEobGzbXY5NzslocfLGNPmb1P//Z"
};
}),
"[project]/src/assets/svc-ihm-recycling.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-ihm-recycling.0cd6m50034ilq.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-ihm-recycling.png.mjs { IMAGE => \"[project]/src/assets/svc-ihm-recycling.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$ihm$2d$recycling$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-ihm-recycling.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$ihm$2d$recycling$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCOx1PUdQklYSXC2qvsMrOeT/s4zRKrK+jFClBrY//Z"
};
}),
"[project]/src/assets/svc-load-line.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-load-line.0pav9u01odlsb.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-load-line.png.mjs { IMAGE => \"[project]/src/assets/svc-load-line.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$load$2d$line$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-load-line.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$load$2d$line$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDm9E12P+2ILma9mkkjB2+Ycj261jSjL2l5M9HE4ml7Bwpxsf/Z"
};
}),
"[project]/src/assets/svc-marpol.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-marpol.0vtf49sju28ar.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-marpol.png.mjs { IMAGE => \"[project]/src/assets/svc-marpol.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$marpol$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-marpol.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$marpol$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDb0rxZp6AD7GsYx2f/AOtXpThN9Tx6eIprSx//2Q=="
};
}),
"[project]/src/assets/svc-modu.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-modu.2h4_kb573gys8.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-modu.png.mjs { IMAGE => \"[project]/src/assets/svc-modu.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$modu$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-modu.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$modu$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBjeNhIQ8SRIqnYwCEANnr16VtzT5tjG0eXc//Z"
};
}),
"[project]/src/assets/svc-new-construction.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-new-construction.2zsbri04qs-6v.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-new-construction.png.mjs { IMAGE => \"[project]/src/assets/svc-new-construction.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$new$2d$construction$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-new-construction.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$new$2d$construction$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwB6eKdXnv8A7MYjj7vmPH8oGO3NZ+1NPZH/2Q=="
};
}),
"[project]/src/assets/svc-offshore-service.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-offshore-service.2ihpfyn-7k2ed.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-offshore-service.png.mjs { IMAGE => \"[project]/src/assets/svc-offshore-service.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$offshore$2d$service$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-offshore-service.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$offshore$2d$service$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmLPxBZIygaYuOhUucfXNaylV5rcxUXTt8J//Z"
};
}),
"[project]/src/assets/svc-plan-approval.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-plan-approval.1kbb92c5gkr_t.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-plan-approval.png.mjs { IMAGE => \"[project]/src/assets/svc-plan-approval.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$plan$2d$approval$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-plan-approval.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$plan$2d$approval$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBmm3+s2E8kOoCKF0cLhYwBt6ZP4GumFCcoXTMZTipWZ//Z"
};
}),
"[project]/src/assets/svc-solas.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-solas.0b76o882_c-xr.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-solas.png.mjs { IMAGE => \"[project]/src/assets/svc-solas.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$solas$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-solas.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$solas$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDG8I+IXsrxbGycJHJhm3c5x61XLU5730DmpeztbU//2Q=="
};
}),
"[project]/src/assets/svc-survey-certification.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-survey-certification.2f63yy_1i1zri.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-survey-certification.png.mjs { IMAGE => \"[project]/src/assets/svc-survey-certification.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2d$certification$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-survey-certification.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2d$certification$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDP8M69d2ERaJUZoImdNw4Jx0zSUm2XKMYrzP/Z"
};
}),
"[project]/src/assets/svc-survey.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-survey.20s4rv-3zpzcp.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-survey.jpg.mjs { IMAGE => \"[project]/src/assets/svc-survey.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-survey.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 768,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzGK7C2B2RgPKCrE+3PFPoK2p//9k="
};
}),
"[project]/src/assets/svc-tonnage.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-tonnage.0g0831nphoa7n.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-tonnage.png.mjs { IMAGE => \"[project]/src/assets/svc-tonnage.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$tonnage$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-tonnage.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$tonnage$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDjdK1DW7WGSS0lkWy2lcxgA89eetTdF2Z//9k="
};
}),
"[project]/src/assets/svc-transfer-of-class.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-transfer-of-class.10pdwqpaadxao.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-transfer-of-class.png.mjs { IMAGE => \"[project]/src/assets/svc-transfer-of-class.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$transfer$2d$of$2d$class$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-transfer-of-class.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$transfer$2d$of$2d$class$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwB6+Irp72GWK/bbvwYVXIfgYyc9KaqSIcFc/9k="
};
}),
"[project]/src/assets/svc-yacht-service.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/svc-yacht-service.2r_irllp9q-cb.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/svc-yacht-service.png.mjs { IMAGE => \"[project]/src/assets/svc-yacht-service.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$yacht$2d$service$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/svc-yacht-service.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$yacht$2d$service$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCEeJbD7AXkuYWkZeI4kwR9TxXpz9pJ8qkzzafJFczij//Z"
};
}),
"[project]/src/assets/why-port.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/why-port.1wmsa8yhe0edi.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/why-port.jpg.mjs { IMAGE => \"[project]/src/assets/why-port.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$why$2d$port$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/why-port.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$why$2d$port$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1920,
    height: 1080,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzOXUZUnaPqFPUnrWsalR/aJnTpRdlBH//2Q=="
};
}),
"[project]/src/components/layout/BrandLogo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Brand mark | pairs image logo with type-led branding.
 * Uses forwardRef so parent components (Radix, motion) can attach refs safely.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
const sizeMap = {
    default: {
        logo: "h-12 w-auto sm:h-16 md:h-18 lg:h-[88px]",
        brand: "text-[16px] sm:text-[20px] md:text-[24px]",
        tagline: "text-[7.5px] sm:text-[9.5px] md:text-[11.5px]"
    },
    large: {
        logo: "h-24 w-auto md:h-32",
        brand: "text-[30px]",
        tagline: "text-[12px] md:text-[13px]"
    }
};
const BrandLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = "light", size = "default", layout = "horizontal", className = "" }, ref)=>{
    const isLight = variant === "light";
    const s = sizeMap[size];
    const isVertical = layout === "vertical";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        href: "/",
        className: `flex ${isVertical ? "flex-col items-start gap-3 sm:gap-4" : "items-center gap-2.5 sm:gap-3"} group ${className}`,
        "aria-label": "GR Class | Home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/grclass-logo.webp",
                alt: "GR Class Classification Society Logo",
                className: s.logo,
                style: {
                    filter: isLight ? "brightness(0) invert(1)" /* white for dark bg */  : "brightness(0) saturate(100%) invert(10%) sepia(60%) saturate(2800%) hue-rotate(200deg) brightness(90%) contrast(100%)" /* dark navy override */ 
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/BrandLogo.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "leading-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block font-display font-extrabold tracking-[0.06em] " + s.brand + " " + (isLight ? "text-background" : "text-primary"),
                        children: "GR CLASS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/BrandLogo.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0.5 block uppercase tracking-[0.14em] " + s.tagline + " " + (isLight ? "text-background/40" : "text-primary/50"),
                        children: "Classified for Standards"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/BrandLogo.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/BrandLogo.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/BrandLogo.tsx",
        lineNumber: 35,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
BrandLogo.displayName = "BrandLogo";
}),
"[project]/src/components/layout/PageHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHero",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Reusable inner-page hero band | used by Services, About, Contact, etc.
 * Mirrors the original `.page-hero` block.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
;
;
;
function PageHero({ eyebrow, title, subtitle, breadcrumbs = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-b-[3px] border-accent bg-primary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page py-14 md:py-16",
            children: [
                breadcrumbs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Breadcrumb",
                    className: "mb-4 flex items-center gap-2 text-[12px] text-background/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "transition-colors hover:text-background/70",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/PageHero.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        breadcrumbs.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-3 w-3 text-background/25"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageHero.tsx",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this),
                                    b.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: b.href,
                                        className: "transition-colors hover:text-background/70",
                                        children: b.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageHero.tsx",
                                        lineNumber: 26,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-background/65",
                                        children: b.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageHero.tsx",
                                        lineNumber: 28,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, b.label, true, {
                                fileName: "[project]/src/components/layout/PageHero.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/PageHero.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "eyebrow text-accent",
                    children: eyebrow
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/PageHero.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "h-display mt-3 max-w-3xl text-[clamp(28px,3.2vw,46px)] text-background",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/PageHero.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 max-w-xl text-[16px] font-light leading-relaxed text-background/60",
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/PageHero.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/PageHero.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/PageHero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/SiteFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/BrandLogo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const SiteFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((_, ref)=>{
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const subscribe = async (e)=>{
        e.preventDefault();
        if (!email) return;
        setBusy(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeNewsletter"])(email, "footer");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Subscribed", {
                description: "You'll receive the next bulletin."
            });
            setEmail("");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Subscription failed", {
                description: err instanceof Error ? err.message : "Please try again."
            });
        } finally{
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: ref,
        className: "bg-primary text-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-page grid gap-10 py-14 sm:gap-12 md:grid-cols-12 md:py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                variant: "light",
                                size: "large",
                                layout: "vertical"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 max-w-sm text-sm font-light leading-relaxed text-background/55",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].description
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 space-y-3 text-sm text-background/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].email}`,
                                        className: "flex items-center gap-3 transition-colors hover:text-background",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "h-4 w-4 text-accent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone}`,
                                        className: "flex items-center gap-3 transition-colors hover:text-background",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "h-4 w-4 text-accent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "mt-1 h-4 w-4 shrink-0 text-accent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-relaxed text-background/70",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].address
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent",
                                children: "Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2.5 text-sm text-background/65",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainNav"].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: i.href,
                                                className: "transition-colors hover:text-background",
                                                children: i.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, i.href, false, {
                                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/profile",
                                            className: "transition-colors hover:text-background",
                                            children: "Company Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-background/45",
                                                        children: "Classification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1.5 text-xs text-background/65",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesCatalogue"].filter((s)=>s.category === "classification").map((svc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/services/${svc.slug}`,
                                                                    className: "transition-colors hover:text-background block",
                                                                    children: svc.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, svc.slug, false, {
                                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-background/45",
                                                        children: "Other Services"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1.5 text-xs text-background/65",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesCatalogue"].filter((s)=>s.category === "other").map((svc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/services/${svc.slug}`,
                                                                    className: "transition-colors hover:text-background block",
                                                                    children: svc.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, svc.slug, false, {
                                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-background/45",
                                                        children: "Statutory"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1.5 text-xs text-background/65",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesCatalogue"].filter((s)=>s.category === "statutory").map((svc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/services/${svc.slug}`,
                                                                    className: "transition-colors hover:text-background block",
                                                                    children: svc.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, svc.slug, false, {
                                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "mb-2 text-[11px] font-semibold uppercase tracking-wider text-background/45",
                                                        children: "Environmental"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1.5 text-xs text-background/65",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesCatalogue"].filter((s)=>s.category === "environmental").map((svc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/services/${svc.slug}`,
                                                                    className: "transition-colors hover:text-background block",
                                                                    children: svc.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, svc.slug, false, {
                                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent",
                                children: "Operations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: subscribe,
                                className: "mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-mono text-[10px] uppercase tracking-wider text-background/40",
                                        children: "Technical bulletin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                placeholder: "you@company.com",
                                                className: "w-full border border-background/10 bg-background/[0.04] px-3 py-2.5 text-[13px] text-background placeholder:text-background/30 focus:border-accent focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: busy,
                                                className: "flex items-center justify-center bg-accent px-3 text-accent-foreground transition-colors hover:bg-accent-bright disabled:opacity-60",
                                                "aria-label": "Subscribe",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-[11px] leading-relaxed text-background/40",
                                children: "ISO 9001:2015 & ISO 14001 Certified · Founded 2022"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/SiteFooter.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-background/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-page flex flex-col items-start justify-between gap-3 py-5 text-[11px] text-background/40 md:flex-row md:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].name,
                                ". All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone}`,
                                    className: "transition-colors hover:text-background/70",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].phone
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/legal/privacy",
                                    className: "transition-colors hover:text-background/70",
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/legal/terms",
                                    className: "transition-colors hover:text-background/70",
                                    children: "Terms"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/legal/compliance",
                                    className: "transition-colors hover:text-background/70",
                                    children: "Compliance"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 border-l border-white/20 pl-6 ml-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://facebook.com/grclass",
                                            target: "_blank",
                                            rel: "noopener",
                                            className: "transition-colors hover:text-background/70",
                                            children: "Facebook"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://x.com/grclass",
                                            target: "_blank",
                                            rel: "noopener",
                                            className: "transition-colors hover:text-background/70",
                                            children: "X"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://instagram.com/grclass",
                                            target: "_blank",
                                            rel: "noopener",
                                            className: "transition-colors hover:text-background/70",
                                            children: "Instagram"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://linkedin.com/company/grclass",
                                            target: "_blank",
                                            rel: "noopener",
                                            className: "transition-colors hover:text-background/70",
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://youtube.com/@grclass",
                                            target: "_blank",
                                            rel: "noopener",
                                            className: "transition-colors hover:text-background/70",
                                            children: "YouTube"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/SiteFooter.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/SiteFooter.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SiteFooter.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SiteFooter.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SiteFooter.displayName = "SiteFooter";
}),
"[project]/src/components/layout/SiteHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.js [app-ssr] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/BrandLogo.tsx [app-ssr] (ecmascript)");
/**
 * Primary site navigation. Sticky, navy, gold underline on hover.
 * Mobile: collapses behind a sheet trigger.
 * Desktop: mega dropdown for Services.
 */ "use client";
;
;
;
;
;
;
;
function SiteHeader() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedMobile, setExpandedMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const dropdownTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    // Lock body scroll when mobile menu open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = open ? "hidden" : "";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        open
    ]);
    // Close mobile menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOpen(false);
        setShowDropdown(false);
        setExpandedMobile(null);
    }, [
        pathname
    ]);
    const openDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setShowDropdown(true);
    }, []);
    const closeDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dropdownTimeout.current = setTimeout(()=>setShowDropdown(false), 120);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 inset-x-0 z-50 transition-all duration-500 " + (scrolled ? "glass-panel-navy py-1" : "bg-primary/95 backdrop-blur-md py-3"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-accent via-accent-bright to-accent opacity-90"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-page flex h-16 items-center justify-between gap-4 md:h-20 md:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$BrandLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                variant: "light"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden items-stretch lg:flex",
                                "aria-label": "Primary",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainNav"].map((item)=>{
                                    const active = pathname === item.href;
                                    const hasChildren = !!item.children;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-stretch",
                                        onMouseEnter: hasChildren ? openDropdown : undefined,
                                        onMouseLeave: hasChildren ? closeDropdown : undefined,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "group relative flex items-center px-4 text-[13.5px] font-semibold tracking-wide transition-colors duration-200 " + (active ? "text-white" : "text-white/65 hover:text-white"),
                                                children: [
                                                    item.label,
                                                    hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "ml-1 h-3.5 w-3.5 transition-transform duration-200 " + (showDropdown ? "rotate-180" : "")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-accent transition-all duration-300 " + (active ? "w-[60%] opacity-100" : "w-0 opacity-0 group-hover:w-[40%] group-hover:opacity-60")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this),
                                            hasChildren && showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 w-full top-full bg-primary-deep/95 backdrop-blur-2xl shadow-2xl z-50 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300",
                                                onMouseEnter: openDropdown,
                                                onMouseLeave: closeDropdown,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container-page grid grid-cols-4 gap-8 py-10",
                                                    children: item.children.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-accent font-display text-[13px] font-bold uppercase tracking-[0.14em] mb-4",
                                                                    children: cat.heading
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2.5",
                                                                    children: cat.items.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: sub.href,
                                                                                className: "text-[13.5px] text-white/70 hover:text-white transition-colors",
                                                                                children: sub.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                                                lineNumber: 124,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, sub.href + sub.label, false, {
                                                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                                            lineNumber: 123,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, cat.heading, true, {
                                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 110,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 md:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/verify",
                                        className: "hidden items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white lg:flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            " Verify"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].ops,
                                        className: "hidden items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white xl:flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this),
                                            " Login"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden h-6 w-px bg-white/15 mx-2 xl:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "hidden items-center bg-gradient-to-r from-accent to-accent-bright bg-sweep px-5 py-2.5 text-[13px] font-bold tracking-wide text-primary shadow-brass transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--accent)/0.6)] md:inline-flex rounded-sm",
                                        children: "Get in touch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpen((o)=>!o),
                                        className: "flex h-10 w-10 items-center justify-center text-white/80 hover:text-white transition-colors lg:hidden",
                                        "aria-label": open ? "Close menu" : "Open menu",
                                        "aria-expanded": open,
                                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 173,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 173,
                                            columnNumber: 51
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-x-0 top-[66px] md:top-[82px] bottom-0 z-40 overflow-y-auto bg-primary-deep lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container-page flex flex-col py-6",
                    "aria-label": "Mobile",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainNav"].map((item)=>{
                            const active = pathname === item.href;
                            const hasChildren = !!item.children;
                            const isExpanded = expandedMobile === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: hasChildren ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setExpandedMobile(isExpanded ? null : item.href),
                                            className: "flex w-full items-center justify-between border-b border-white/[0.06] py-4 text-[15px] font-medium transition-colors " + (active ? "text-accent" : "text-white/75 hover:text-white"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-4 w-4 transition-transform duration-200 " + (isExpanded ? "rotate-180" : "")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 193,
                                            columnNumber: 23
                                        }, this),
                                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-white/[0.06] pb-4",
                                            children: item.children.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 first:mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-accent font-display text-[11px] font-bold uppercase tracking-[0.14em] mb-2 px-3",
                                                            children: cat.heading
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1",
                                                            children: cat.items.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: sub.href,
                                                                        onClick: ()=>setOpen(false),
                                                                        className: "block px-3 py-1.5 text-[13.5px] text-white/60 hover:text-white transition-colors",
                                                                        children: sub.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, sub.href + sub.label, false, {
                                                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 35
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, cat.heading, true, {
                                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 29
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 207,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                    lineNumber: 192,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setOpen(false),
                                    className: "flex items-center justify-between border-b border-white/[0.06] py-4 text-[15px] font-medium transition-colors " + (active ? "text-accent" : "text-white/75 hover:text-white"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 240,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[10px] text-white/25",
                                            children: String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainNav"].indexOf(item) + 1).padStart(2, "0")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 241,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                    lineNumber: 232,
                                    columnNumber: 21
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                lineNumber: 190,
                                columnNumber: 17
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    onClick: ()=>setOpen(false),
                                    className: "flex items-center justify-center bg-accent px-4 py-3.5 text-sm font-bold text-accent-foreground",
                                    children: "Get in touch"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/verify",
                                    onClick: ()=>setOpen(false),
                                    className: "flex items-center justify-center gap-2 border border-white/15 px-4 py-3 text-sm font-medium text-white/80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        " Verify Certificate"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/SiteHeader.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/SiteHeader.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SiteHeader.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SiteHeader.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/SiteShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Top-level page shell | composes the header, util bar, trust bar, and footer.
 * Acts like a Next.js root `layout.tsx`. Pages render their own sections inside.
 */ __turbopack_context__.s([
    "SiteShell",
    ()=>SiteShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SiteHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SiteHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SiteFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SiteFooter.tsx [app-ssr] (ecmascript)");
;
;
;
function SiteShell({ children, showTrust = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SiteHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/SiteShell.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SiteShell.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SiteFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteFooter"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/SiteShell.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SiteShell.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "serviceCategories",
    ()=>serviceCategories,
    "servicesCatalogue",
    ()=>servicesCatalogue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-survey.jpg.mjs { IMAGE => "[project]/src/assets/svc-survey.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$cert$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$cert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-cert.jpg.mjs { IMAGE => "[project]/src/assets/svc-cert.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$advisory$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$advisory$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-advisory.jpg.mjs { IMAGE => "[project]/src/assets/svc-advisory.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$careers$2d$hero$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$careers$2d$hero$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/careers-hero.jpg.mjs { IMAGE => "[project]/src/assets/careers-hero.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$about$2d$surveyor$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$about$2d$surveyor$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/about-surveyor.jpg.mjs { IMAGE => "[project]/src/assets/about-surveyor.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$why$2d$port$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$why$2d$port$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/why-port.jpg.mjs { IMAGE => "[project]/src/assets/why-port.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// Custom generated service images
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$fleet$2d$in$2d$services$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$fleet$2d$in$2d$services$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-fleet-in-services.png.mjs { IMAGE => "[project]/src/assets/svc-fleet-in-services.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$new$2d$construction$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$new$2d$construction$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-new-construction.png.mjs { IMAGE => "[project]/src/assets/svc-new-construction.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$transfer$2d$of$2d$class$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$transfer$2d$of$2d$class$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-transfer-of-class.png.mjs { IMAGE => "[project]/src/assets/svc-transfer-of-class.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$yacht$2d$service$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$yacht$2d$service$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-yacht-service.png.mjs { IMAGE => "[project]/src/assets/svc-yacht-service.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$offshore$2d$service$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$offshore$2d$service$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-offshore-service.png.mjs { IMAGE => "[project]/src/assets/svc-offshore-service.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$conversion$2d$projects$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$conversion$2d$projects$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-conversion-projects.png.mjs { IMAGE => "[project]/src/assets/svc-conversion-projects.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$plan$2d$approval$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$plan$2d$approval$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-plan-approval.png.mjs { IMAGE => "[project]/src/assets/svc-plan-approval.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$flag$2d$statutory$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$flag$2d$statutory$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-flag-statutory.png.mjs { IMAGE => "[project]/src/assets/svc-flag-statutory.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2d$certification$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2d$certification$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-survey-certification.png.mjs { IMAGE => "[project]/src/assets/svc-survey-certification.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$solas$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$solas$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-solas.png.mjs { IMAGE => "[project]/src/assets/svc-solas.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$marpol$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$marpol$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-marpol.png.mjs { IMAGE => "[project]/src/assets/svc-marpol.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$load$2d$line$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$load$2d$line$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-load-line.png.mjs { IMAGE => "[project]/src/assets/svc-load-line.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$tonnage$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$tonnage$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-tonnage.png.mjs { IMAGE => "[project]/src/assets/svc-tonnage.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$modu$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$modu$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-modu.png.mjs { IMAGE => "[project]/src/assets/svc-modu.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$ballast$2d$water$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$ballast$2d$water$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-ballast-water.png.mjs { IMAGE => "[project]/src/assets/svc-ballast-water.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$ihm$2d$recycling$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$ihm$2d$recycling$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-ihm-recycling.png.mjs { IMAGE => "[project]/src/assets/svc-ihm-recycling.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$energy$2d$efficiency$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$energy$2d$efficiency$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/svc-energy-efficiency.png.mjs { IMAGE => "[project]/src/assets/svc-energy-efficiency.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const servicesCatalogue = [
    /* ============================================================== */ /*  CLASSIFICATION                                                 */ /* ============================================================== */ {
        slug: "fleet-in-services",
        eyebrow: "Classification",
        title: "Fleet in Services",
        tagline: "Maintaining safety and compliance throughout your vessel's operational life.",
        description: "GR ensures ships and maritime assets maintain safety, structural integrity, and regulatory compliance throughout their operational life. This involves periodic, annual, intermediate, and special surveys to verify technical standards and validity of certificates.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$fleet$2d$in$2d$services$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$fleet$2d$in$2d$services$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Periodic Surveys",
            "Annual Surveys",
            "Intermediate Surveys",
            "Special Surveys",
            "Certificate Verification",
            "Compliance Assessment"
        ],
        deliverables: [
            "Certificate of Classification",
            "Survey Reports",
            "Technical Compliance Documentation",
            "Digital Records"
        ],
        duration: "Continuous throughout vessel life",
        certifications: [
            "Class Certificate",
            "Hull & Machinery",
            "International Standards"
        ],
        category: "classification",
        detailedContent: [
            {
                heading: "Class Admission Process",
                paragraphs: [
                    "Application to GR Class is a smooth yet standards-compliant process and can be enacted by contacting either the GR Head Office or your local GR branches.",
                    "In order to commence the class admission process and to determine the applicable entry survey requirements, the following information and documentation of the vessel should be transmitted to GR Class:"
                ],
                list: [
                    "Updated ship's survey status including recommendations",
                    "Updated Hull & Machinery master lists",
                    "Copies of existing class certificate",
                    "Copies of existing statutory certificates",
                    "Copies of ship's registration documents issued by the flag Administration",
                    "Main Class Plans (General Arrangement plan, mid ship section, etc.)",
                    "Trim & Stability booklet",
                    "Ultrasonic Thickness Measurement booklet"
                ]
            },
            {
                heading: "Survey Scheduling & Statutory Certification",
                paragraphs: [
                    "A prompt schedule for vessel's attendance shall be determined in contact with ship operators to ensure minimal disruption to vessel's trading activity.",
                    "Statutory certificates are to be issued by GR Class on behalf of the Flag Administration following satisfactory completion of the applicable technical surveys."
                ]
            }
        ]
    },
    {
        slug: "new-construction",
        eyebrow: "Classification",
        title: "New Construction",
        tagline: "From concept design to vessel delivery with full regulatory compliance.",
        description: "We are deeply structured and technically groomed to execute the concept design to the delivery of the vessel. We ensure compliance with pertinent regulatory, quality, and operational standards.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$new$2d$construction$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$new$2d$construction$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Design Review",
            "Material Certification",
            "Construction Supervision",
            "Sea Trials",
            "Initial Classification"
        ],
        deliverables: [
            "Certificate of Class",
            "Construction Survey Reports",
            "Material Test Certificates"
        ],
        duration: "Project duration (typically 12-36 months)",
        certifications: [
            "Class Certificate",
            "International Standards",
            "Flag State Certification"
        ],
        category: "classification",
        detailedContent: [
            {
                heading: "New Construction Scope",
                paragraphs: [
                    "GR Class provides end-to-end supervision and certification throughout every phase of a new-build project:"
                ],
                list: [
                    "Review of class-relevant design documentation, calculations and drawings",
                    "Design approval, survey, certification of materials and equipment",
                    "Supervision of the vessel's construction on site",
                    "Witnessing of functional tests, including dock and sea trials",
                    "Initial Classification survey for the issue of ship's Certificate of Class, H/M & Equipment",
                    "Initial Statutory surveys for certification on behalf of intended Flag State"
                ]
            }
        ]
    },
    {
        slug: "transfer-of-class",
        eyebrow: "Classification",
        title: "Transfer of Class",
        tagline: "A simple and cost-effective process to move your vessel to GR Class.",
        description: "Transfer of Class (ToC) is the formal process of moving a ship's classification from one classification society (losing society) to another (gaining society). Transferring an existing vessel to GR Class is a simple and inexpensive process.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$transfer$2d$of$2d$class$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$transfer$2d$of$2d$class$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Class Entry Assessment",
            "Documentation Transfer",
            "Survey Scheduling",
            "Certificate Issuance"
        ],
        deliverables: [
            "New Certificate of Class",
            "Transfer Documentation",
            "Survey Status Report"
        ],
        duration: "2-6 weeks",
        certifications: [
            "Class Certificate",
            "Hull & Machinery"
        ],
        category: "classification",
        detailedContent: [
            {
                heading: "Transfer Process",
                paragraphs: [
                    "Owners may get in touch with any of our offices or place a request via the Class Entry Service Request Form. We shall contact the losing society and obtain pertinent ship's survey and certification history, and class-related documentation and provide guidance on survey schedules so as to minimize disruptions to commercial and operational obligations of your ship."
                ]
            }
        ]
    },
    {
        slug: "yacht-service",
        eyebrow: "Classification",
        title: "Yacht Service",
        tagline: "Trusted classification for private and commercial yachts.",
        description: "We deliver trusted classification survey and certification services for private and commercial yachts, ensuring compliance with relevant classification standards, enhancing safety and reliable yacht performance.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$yacht$2d$service$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$yacht$2d$service$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Yacht Classification",
            "Safety Surveys",
            "Compliance Certification",
            "Performance Assessment"
        ],
        deliverables: [
            "Yacht Classification Certificate",
            "Safety Compliance Reports"
        ],
        duration: "Varies by yacht size",
        certifications: [
            "Yacht Classification Standards"
        ],
        category: "classification"
    },
    {
        slug: "offshore-service",
        eyebrow: "Classification",
        title: "Offshore Service",
        tagline: "Classification and technical solutions for offshore installations.",
        description: "We support the international offshore service by offering classification and technical solutions for MODUs, FPSOs and FSUs, Accommodation Platforms and other floating installations and mobile offshore units.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$offshore$2d$service$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$offshore$2d$service$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "MODU Classification",
            "FPSO Certification",
            "Design Verification",
            "Asset Integrity Management"
        ],
        deliverables: [
            "Offshore Classification Certificate",
            "Design Approval Documentation",
            "Survey Reports"
        ],
        duration: "Continuous",
        certifications: [
            "GR Class Rules",
            "International Standards"
        ],
        category: "classification",
        detailedContent: [
            {
                heading: "Offshore Classification Services",
                paragraphs: [
                    "GR Class provides comprehensive offshore classification covering the full lifecycle of floating and mobile installations:"
                ],
                list: [
                    "Review and Approval of unit's design and corresponding engineering studies, manuals and plans",
                    "Determination of intended class notation under GR Class Rules",
                    "Periodic scheduled surveys for maintenance of classification"
                ]
            }
        ]
    },
    {
        slug: "conversion-projects",
        eyebrow: "Classification",
        title: "Conversion Projects",
        tagline: "Ensuring compliance through every stage of vessel conversion.",
        description: "We ensure that a ship's conversion or modification project complies with stringent structural, safety, and environmental standards.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$conversion$2d$projects$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$conversion$2d$projects$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Feasibility Assessment",
            "Design Approval",
            "Modification Survey",
            "Recertification"
        ],
        deliverables: [
            "Updated Classification Certificate",
            "Conversion Approval Documentation"
        ],
        duration: "Project-dependent",
        certifications: [
            "Updated Class Notations"
        ],
        category: "classification",
        detailedContent: [
            {
                heading: "GR Class 4-Stage Conversion Process",
                list: [
                    "Feasibility & Basic Design Approval",
                    "Fabrication & Modification Survey",
                    "Commissioning & Sea Trials",
                    "Recertification & Updated Notations"
                ]
            }
        ]
    },
    {
        slug: "plan-approval",
        eyebrow: "Classification",
        title: "Approval of Plans and Manuals",
        tagline: "Verification of ship design, integrity, and regulatory documentation.",
        description: "We undertake reviews and approvals of manuals in accordance with our Classification Rules and Regulations as well as national and international standards.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$plan$2d$approval$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$plan$2d$approval$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Plan Review",
            "Manual Approval",
            "Design Verification",
            "Structural Assessment"
        ],
        deliverables: [
            "Approved Plans",
            "Compliance Documentation"
        ],
        duration: "2-4 weeks per submission",
        certifications: [
            "Classification Rules",
            "International Standards"
        ],
        category: "classification",
        detailedContent: [
            {
                heading: "Key Plans",
                list: [
                    "General Arrangement (GA) Plan",
                    "Structural Plans: Midship section, shell expansion, and hatch covers",
                    "Safety & Systems: Fire Control Plans, Life-Saving Appliances (LSA), ventilation, and fuel/ballast piping"
                ]
            },
            {
                heading: "Calculations & Verifications",
                list: [
                    "Shipboard Oil Pollution Emergency Plan (SOPEP)",
                    "Shipboard Marine Pollution Emergency Plan (SMEP)",
                    "Ballast Water Management Plan (BWMP)",
                    "Ship-to-Ship Operational Manual (STS)",
                    "Garbage Management Plan (GMP)",
                    "Fire Control & Life Saving Plan",
                    "Fire Safety Operational & Management Plan"
                ]
            }
        ]
    },
    /* ============================================================== */ /*  STATUTORY SERVICES                                             */ /* ============================================================== */ {
        slug: "flag-statutory-services",
        eyebrow: "Statutory",
        title: "Flag Statutory Services",
        tagline: "Delegated statutory survey and certification services on behalf of flag administrations.",
        description: "As a Recognized Organization (RO) and Recognized Security Organization (RSO), GR Class is delegated by flag administrations to perform audits, surveys, and issue statutory certificates to ensure compliance with national and international codes.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$flag$2d$statutory$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$flag$2d$statutory$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Flag State Delegations & Authorizations",
            "Recognized Organization (RO) Surveys",
            "Recognized Security Organization (RSO) Audits",
            "Statutory Certificate Issuance",
            "Liaison with Flag Administrations"
        ],
        deliverables: [
            "Statutory Certificates of Compliance",
            "Audit and Survey Reports",
            "Official Flag Endorsements"
        ],
        duration: "Continuous delegation and audit schedules",
        certifications: [
            "Flag State Authorizations",
            "RO / RSO Codes",
            "IMO Resolution A.739(18)"
        ],
        category: "statutory",
        detailedContent: [
            {
                heading: "Recognized Organization Roles",
                paragraphs: [
                    "GR Class acts on behalf of major flag administrations to verify that vessels registered under their flags comply with the applicable international conventions and national regulations.",
                    "Our services encompass plan approvals, structural surveys, equipment checks, and safety management audits, ensuring absolute compliance with delegated flag state requirements."
                ]
            }
        ]
    },
    {
        slug: "survey-certification",
        eyebrow: "Statutory",
        title: "Survey & Certification",
        tagline: "Statutory surveys and certification as per international conventions.",
        description: "We carry out comprehensive statutory surveys and issue corresponding certificates, proving that your vessel meets all applicable safety and environmental regulations.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2d$certification$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2d$certification$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Annual, Intermediate, and Renewal Surveys",
            "Statutory Inspections",
            "Condition Surveys",
            "Certificate Maintenance & Endorsement"
        ],
        deliverables: [
            "Statutory Certificates",
            "Vessel Inspection Reports",
            "Technical Compliance Certificates"
        ],
        duration: "As per statutory survey window (annual/renewal)",
        certifications: [
            "IMO Conventions",
            "Flag State Delegations"
        ],
        category: "statutory",
        detailedContent: [
            {
                heading: "Statutory Surveys Scope",
                paragraphs: [
                    "Our qualified exclusive surveyors verify that vessels are maintained in full compliance with the statutory codes and requirements. We offer a unified survey regime to reduce vessel downtime, coordinating multiple statutory surveys in a single attendance."
                ]
            }
        ]
    },
    {
        slug: "solas",
        eyebrow: "Statutory",
        title: "SOLAS Compliance",
        tagline: "Safety of Life at Sea convention compliance and certification.",
        description: "Ensuring your vessels adhere to all SOLAS safety standards, covering life-saving appliances, fire protection, radio communications, and safety construction.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$solas$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$solas$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Safety Construction Surveys",
            "Safety Equipment Audits",
            "Safety Radio Surveys",
            "Life-Saving Appliances (LSA) Inspections",
            "Fire-Fighting Systems & Equipment Audits"
        ],
        deliverables: [
            "Cargo Ship Safety Construction Certificate",
            "Cargo Ship Safety Equipment Certificate",
            "Cargo Ship Safety Radio Certificate",
            "Passenger Ship Safety Certificate"
        ],
        duration: "Annual inspections and 5-year renewal cycles",
        certifications: [
            "SOLAS 1974 as amended",
            "LSA Code",
            "FFS Code"
        ],
        category: "statutory",
        detailedContent: [
            {
                heading: "SOLAS Safety Requirements",
                paragraphs: [
                    "SOLAS compliance is the cornerstone of maritime safety. GR Class provides meticulous surveys of structural construction, machinery installations, electrical equipment, life-saving systems, and fire protection equipment to ensure maximum safety for the crew and the vessel."
                ]
            }
        ]
    },
    {
        slug: "marpol",
        eyebrow: "Statutory",
        title: "MARPOL Compliance",
        tagline: "Prevention of pollution from ships compliance and certification.",
        description: "Complete survey and certification under MARPOL Annexes I to VI to prevent marine pollution by oil, sewage, garbage, and air emissions.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$marpol$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$marpol$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Annex I: Prevention of Oil Pollution (IOPP)",
            "Annex II: Control of Noxious Liquid Substances (NLS)",
            "Annex IV: Sewage Pollution Prevention (ISPP)",
            "Annex V: Garbage Pollution Prevention",
            "Annex VI: Air Pollution Prevention (IAPP)"
        ],
        deliverables: [
            "IOPP Certificate",
            "NLS Certificate",
            "ISPP Certificate",
            "IAPP Certificate",
            "Garbage Management Plan Approval"
        ],
        duration: "Aligned with annual statutory survey cycles",
        certifications: [
            "MARPOL 73/78 as amended",
            "Annexes I - VI"
        ],
        category: "statutory",
        detailedContent: [
            {
                heading: "Marine Environmental Protection",
                paragraphs: [
                    "Our environmental compliance surveys verify that ships meet strict MARPOL limits for emissions and discharge. We assist operators in implementing equipment standards like oil filtering devices, sewage treatment plants, and marine exhaust scrubbers."
                ]
            }
        ]
    },
    {
        slug: "load-line",
        eyebrow: "Statutory",
        title: "Load Line Certification",
        tagline: "Vessel freeboard assignment and load line surveys.",
        description: "Calculation, assignment of freeboards, and annual/renewal surveys for the issuance of International Load Line Certificates as per the Load Line Convention.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$load$2d$line$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$load$2d$line$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Freeboard Calculation & Verification",
            "Weathertightness & Watertightness Audits",
            "Superstructure & Hatch Cover Inspections",
            "Load Line Mark Verification"
        ],
        deliverables: [
            "International Load Line Certificate (ILLC)",
            "Freeboard Assignment Record",
            "Load Line Survey Reports"
        ],
        duration: "Annual verification, 5-year renewal",
        certifications: [
            "International Convention on Load Lines 1966"
        ],
        category: "statutory",
        detailedContent: [
            {
                heading: "Load Line Integrity",
                paragraphs: [
                    "Load Line surveys ensure that the vessel has sufficient reserve buoyancy and that its hull openings (hatches, ventilators, air pipes, doors) are weathertight to prevent water ingress in heavy seas."
                ]
            }
        ]
    },
    {
        slug: "tonnage",
        eyebrow: "Statutory",
        title: "Tonnage Measurement",
        tagline: "Gross and net tonnage calculations and certification.",
        description: "Measurement and calculation of vessel volumes to determine Gross and Net Tonnages, and issuance of International Tonnage Certificates (ITC 1969).",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$tonnage$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$tonnage$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Vessel Volume Calculations",
            "Gross Tonnage (GT) Assessments",
            "Net Tonnage (NT) Assessments",
            "Tonnage Measurement Audits"
        ],
        deliverables: [
            "International Tonnage Certificate (1969)",
            "Tonnage Calculation Sheets"
        ],
        duration: "One-off issuance (unless major modification occurs)",
        certifications: [
            "International Convention on Tonnage Measurement of Ships 1969"
        ],
        category: "statutory",
        detailedContent: [
            {
                heading: "Tonnage Computations",
                paragraphs: [
                    "Tonnage measurements determine a ship's volume for licensing, port fees, taxation, and regulatory thresholds. GR Class performs precise volumetric audits to establish official gross and net tonnages."
                ]
            }
        ]
    },
    {
        slug: "modu",
        eyebrow: "Statutory",
        title: "MODU Certification",
        tagline: "Mobile Offshore Drilling Units safety certification.",
        description: "Surveys, audits, and certification of Mobile Offshore Drilling Units in compliance with the IMO MODU Code and flag-state requirements.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$modu$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$modu$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "MODU Code Safety Surveys",
            "Offshore Drilling System Audits",
            "Structural Integrity Assessments",
            "Machinery & Electrical System Certification"
        ],
        deliverables: [
            "Mobile Offshore Drilling Unit Safety Certificate",
            "Offshore Survey and Compliance Reports"
        ],
        duration: "Annual survey cycle and 5-year renewals",
        certifications: [
            "IMO MODU Code (1979, 1989, 2009 editions)",
            "Flag State offshore mandates"
        ],
        category: "statutory",
        detailedContent: [
            {
                heading: "Offshore Drilling Safety",
                paragraphs: [
                    "GR Class applies specialized rules for offshore units, checking mooring systems, stability, hazardous area classification, and drilling safety systems to ensure safe operations on mobile drilling platforms."
                ]
            }
        ]
    },
    /* ============================================================== */ /*  ENVIRONMENTAL                                                  */ /* ============================================================== */ {
        slug: "ballast-water-management",
        eyebrow: "Environmental",
        title: "Ballast Water Management",
        tagline: "Protecting the marine environment from invasive species.",
        description: "Ships that sail around the globe run the risk of carrying invasive aquatic species across the ocean, disrupting or harming marine ecosystems. The IMO introduced the BWM Convention requiring all vessels to implement management plans and improve treatment systems.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$ballast$2d$water$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$ballast$2d$water$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "BWM Plan Review",
            "Treatment System Certification",
            "Compliance Assessment"
        ],
        deliverables: [
            "BWM Compliance Certificate",
            "Management Plan Approval"
        ],
        duration: "Per vessel assessment",
        certifications: [
            "BWM Convention",
            "IMO Standards"
        ],
        category: "environmental"
    },
    {
        slug: "ihm-ship-recycling",
        eyebrow: "Environmental",
        title: "IHM & Ship Recycling",
        tagline: "Managing hazardous materials for crew safety and regulatory compliance.",
        description: "Improper handling of hazardous materials can impact crew safety. Owners are faced with complying with EU Ship Recycling regulations and preparing for future IMO requirements.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$ihm$2d$recycling$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$ihm$2d$recycling$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "IHM Preparation",
            "EU SRR Compliance",
            "Hong Kong Convention Certification"
        ],
        deliverables: [
            "IHM Certificate",
            "Ship Recycling Compliance Documentation"
        ],
        duration: "4-8 weeks",
        certifications: [
            "EU Regulation No 1257/2013",
            "Hong Kong Convention"
        ],
        category: "environmental",
        detailedContent: [
            {
                heading: "Primary Regulations",
                paragraphs: [
                    "GR Class offers shipowners certification in accordance with the Hong Kong Convention and/or the EU Regulation, regardless of the ship's current class."
                ],
                list: [
                    "The Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships",
                    "The EU Regulation No 1257/2013 on Ship Recycling (EU SRR)"
                ]
            }
        ]
    },
    {
        slug: "energy-efficiency",
        eyebrow: "Environmental",
        title: "Energy Efficiency",
        tagline: "EEDI, EEXI, and CII compliance for a sustainable fleet.",
        description: "Environmental regulations mandated by IMO under MARPOL Annex VI covering EEDI for new ships, EEXI for existing ships, CII rating scheme, and SEEMP management plans.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$energy$2d$efficiency$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$energy$2d$efficiency$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "EEDI Assessment",
            "EEXI Verification",
            "CII Rating",
            "SEEMP Approval"
        ],
        deliverables: [
            "Energy Efficiency Certificate",
            "SEEMP Approval",
            "CII Rating Report"
        ],
        duration: "Ongoing compliance",
        certifications: [
            "MARPOL Annex VI",
            "IMO Resolutions"
        ],
        category: "environmental",
        detailedContent: [
            {
                heading: "Regulatory Framework",
                list: [
                    "EEDI (Energy Efficiency Design Index): Mandatory for new ships",
                    "EEXI (Existing Ship Energy Efficiency Index): Applies to ships of 400+ GT",
                    "CII (Carbon Intensity Indicator): Ships 5,000+ GT rated A-E",
                    "SEEMP (Ship Energy Efficiency Management Plan)"
                ]
            },
            {
                heading: "Services Provided",
                list: [
                    "Assessment and verification of EEDI/EEXI",
                    "Review & Approval of SEEMP",
                    "Survey for International Ship Energy Efficiency Certificate",
                    "CII rating scheme assessment"
                ]
            }
        ]
    },
    {
        slug: "eu-mrv-compliance",
        eyebrow: "Environmental",
        title: "EU MRV Compliance",
        tagline: "Monitoring, reporting and verification for EU maritime regulations.",
        description: "The EU MRV Maritime Regulation aims to assess environmental impact by collecting and reporting emissions data. It applies to vessels engaged in commercial transport on routes within the EEA. From 2025, expanded to include cargo ships 400-5000 GT.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$advisory$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$advisory$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Monitoring Plan Assessment",
            "Report Verification",
            "Compliance Documentation"
        ],
        deliverables: [
            "EU MRV Compliance Documents",
            "Verified Reports"
        ],
        duration: "Annual cycle",
        certifications: [
            "EU Regulation 2015/757"
        ],
        category: "environmental",
        detailedContent: [
            {
                heading: "Services",
                list: [
                    "EU MRV monitoring plan assessment",
                    "Annual EU MRV report verification",
                    "Issuance of documents confirming compliance"
                ]
            }
        ]
    },
    {
        slug: "vessel-emergency-response",
        eyebrow: "Environmental",
        title: "Vessel Emergency Response",
        tagline: "24/7 emergency assessment for damaged vessels worldwide.",
        description: "Emergency Response Service providing speedy assessment of stability and longitudinal strength of damaged ships. All vessel data stored in computer systems for rapid analysis.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$survey$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Emergency Assessment",
            "Stability Analysis",
            "Strength Verification",
            "Regulatory Coordination"
        ],
        deliverables: [
            "Emergency Assessment Reports",
            "Stability Calculations",
            "Damage Reports"
        ],
        duration: "24/7 availability",
        certifications: [
            "MARPOL 73/78 Annex 1"
        ],
        category: "environmental",
        detailedContent: [
            {
                heading: "Why Choose GR Class",
                list: [
                    "Technical expertise with relevant experience",
                    "Co-ordination with regulatory authorities regardless of ship position",
                    "Available 24 hours a day, 365 days a year",
                    "Computer-based strength & stability analysis",
                    "Meets MARPOL 73/78 Annex 1 requirements for 5,000+ dwt oil tankers"
                ]
            }
        ]
    },
    /* ============================================================== */ /*  OTHER SERVICES                                                 */ /* ============================================================== */ {
        slug: "compliance-support",
        eyebrow: "Support",
        title: "Compliance Support",
        tagline: "Critical compliance support for the maritime industry.",
        description: "We provide critical compliance support by setting technical standards, verifying vessel integrity, and conducting audits on behalf of flag states. We ensure ships meet global safety and environmental mandates, enabling operators to secure insurance, register vessels, and access ports without regulatory penalty.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$careers$2d$hero$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$careers$2d$hero$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Technical Standards",
            "Vessel Integrity Verification",
            "Flag State Audits",
            "Regulatory Compliance"
        ],
        deliverables: [
            "Compliance Reports",
            "Audit Documentation",
            "Regulatory Guidance"
        ],
        duration: "On-demand",
        certifications: [
            "Industry Best Practices",
            "IMO Guidelines"
        ],
        category: "other"
    },
    {
        slug: "remote-surveys",
        eyebrow: "Support",
        title: "Remote Surveys",
        tagline: "Maintaining compliance without disrupting operations.",
        description: "We conduct remote survey and audit activities to support inspection assignments where on-board access is not possible, assisting operational continuity.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$about$2d$surveyor$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$about$2d$surveyor$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Remote Inspection",
            "Documentation Review",
            "Deficiency Verification",
            "Remote Audits"
        ],
        deliverables: [
            "Remote Survey Reports",
            "Compliance Verification"
        ],
        duration: "As needed",
        certifications: [
            "ISM",
            "ISPS",
            "MLC"
        ],
        category: "other",
        detailedContent: [
            {
                heading: "Remote Survey Solutions",
                paragraphs: [
                    "Subject to flag Administration authorization and consent, GR Class offers the following remote survey solutions:"
                ],
                list: [
                    "Occasional Surveys between scheduled surveys",
                    "Documentation based surveys",
                    "Rectification of minor deficiencies",
                    "Remote interim audits for ISM, ISPS, and MLC certification"
                ]
            }
        ]
    },
    {
        slug: "port-state-control",
        eyebrow: "Support",
        title: "Port State Control",
        tagline: "Improving PSC performance across all regional MOUs.",
        description: "GR Class maintains strong oversight and emphasis on continuous PSC performance improvement with the aim to maintain and enhance long-term quality growth and competitiveness.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$why$2d$port$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$why$2d$port$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "PSC Performance Analysis",
            "Detention Prevention",
            "Pre-arrival Checklists",
            "Regulatory Guidance"
        ],
        deliverables: [
            "PSC Readiness Reports",
            "Prevention Measures",
            "Checklist Tools"
        ],
        duration: "Ongoing support",
        certifications: [
            "Regional MOU Standards"
        ],
        category: "other",
        detailedContent: [
            {
                heading: "Our Approach",
                paragraphs: [
                    "GR Class collaborates closely with Flag States and ship operators through sharing detention prevention measures, pre-arrival checklist tools, and guidance on new enforced regulations."
                ]
            }
        ]
    },
    {
        slug: "technical-advisory",
        eyebrow: "Support",
        title: "Technical Advisory Services",
        tagline: "Expert marine engineering and operational optimization.",
        description: "We provide expert marine engineering, regulatory compliance, and operational optimization. By engaging with our clients and gaining in-depth understanding of their needs, our experts deliver tangible improvements to asset and business performance, safely and responsibly.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svc$2d$cert$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$svc$2d$cert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        scope: [
            "Marine Engineering",
            "Regulatory Compliance",
            "Operational Optimization",
            "Risk Assessment"
        ],
        deliverables: [
            "Technical Advisory Reports",
            "Optimization Recommendations"
        ],
        duration: "Project-based",
        certifications: [
            "Industry Best Practices"
        ],
        category: "other"
    }
];
function getServiceBySlug(slug) {
    return servicesCatalogue.find((s)=>s.slug === slug);
}
const serviceCategories = [
    {
        heading: "Classification",
        description: "Comprehensive classification services for vessels of all types throughout their lifecycle.",
        slug: "classification",
        services: [
            "fleet-in-services",
            "new-construction",
            "transfer-of-class",
            "yacht-service",
            "offshore-service",
            "conversion-projects",
            "plan-approval"
        ]
    },
    {
        heading: "Statutory Services",
        description: "International compliance and certification on behalf of flag administrations.",
        slug: "statutory",
        services: [
            "flag-statutory-services",
            "survey-certification",
            "solas",
            "marpol",
            "load-line",
            "tonnage",
            "modu"
        ]
    },
    {
        heading: "Environmental",
        description: "Navigating green shipping regulations and environmental compliance.",
        slug: "environmental",
        services: [
            "ballast-water-management",
            "ihm-ship-recycling",
            "energy-efficiency",
            "eu-mrv-compliance",
            "vessel-emergency-response"
        ]
    },
    {
        heading: "Other Services",
        description: "Technical advisory and compliance support for maritime operations.",
        slug: "other",
        services: [
            "compliance-support",
            "remote-surveys",
            "port-state-control",
            "technical-advisory"
        ]
    }
];
}),
"[project]/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiBase",
    ()=>apiBase,
    "extractErrorMessage",
    ()=>extractErrorMessage,
    "fetchAboutUs",
    ()=>fetchAboutUs,
    "fetchCompliance",
    ()=>fetchCompliance,
    "fetchFAQs",
    ()=>fetchFAQs,
    "fetchNews",
    ()=>fetchNews,
    "fetchPortfolioFeedback",
    ()=>fetchPortfolioFeedback,
    "fetchPrivacyPolicy",
    ()=>fetchPrivacyPolicy,
    "fetchPublicFlags",
    ()=>fetchPublicFlags,
    "fetchStaticContent",
    ()=>fetchStaticContent,
    "fetchTermsAndConditions",
    ()=>fetchTermsAndConditions,
    "fileToBase64",
    ()=>fileToBase64,
    "getSurveyorUploadUrls",
    ()=>getSurveyorUploadUrls,
    "safeParseJSON",
    ()=>safeParseJSON,
    "searchVessel",
    ()=>searchVessel,
    "submitContactEnquiry",
    ()=>submitContactEnquiry,
    "submitSurveyorApplication",
    ()=>submitSurveyorApplication,
    "subscribeNewsletter",
    ()=>subscribeNewsletter,
    "uploadSurveyorDocument",
    ()=>uploadSurveyorDocument,
    "uploadToS3",
    ()=>uploadToS3,
    "uploadToSignedUrl",
    ()=>uploadToSignedUrl,
    "verifyCertificate",
    ()=>verifyCertificate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
/**
 * API client | thin wrapper around the GR Class backend.
 * Base URL is hardcoded as per instructions.
 */ const API_BASE = "https://api.grclass.com";
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${API_BASE}/api/v1`,
    headers: {
        Accept: "application/json"
    }
});
function extractErrorMessage(data, fallback = "Something went wrong.") {
    if (!data) return fallback;
    // Direct message string
    if (typeof data.message === "string" && data.message.trim()) {
        return data.message;
    }
    // Direct error string
    if (typeof data.error === "string" && data.error.trim()) {
        return data.error;
    }
    // Array of error strings: { errors: ["email is required", "name is required"] }
    if (Array.isArray(data.errors) && data.errors.length > 0) {
        const messages = data.errors.map((e)=>typeof e === "string" ? e : e?.message || e?.msg || "").filter(Boolean);
        return messages.length > 0 ? messages.join(". ") : fallback;
    }
    // Object of field errors: { errors: { email: ["is required"], name: ["too short"] } }
    if (data.errors && typeof data.errors === "object" && !Array.isArray(data.errors)) {
        const messages = Object.entries(data.errors).map(([field, msgs])=>{
            const msgStr = Array.isArray(msgs) ? msgs.join(", ") : String(msgs);
            return `${field}: ${msgStr}`;
        });
        return messages.length > 0 ? messages.join(". ") : fallback;
    }
    // Validation errors array: { detail: [{ loc: [...], msg: "..." }] }
    if (Array.isArray(data.detail)) {
        const messages = data.detail.map((d)=>d?.msg || d?.message || "").filter(Boolean);
        return messages.length > 0 ? messages.join(". ") : fallback;
    }
    if (typeof data.detail === "string") {
        return data.detail;
    }
    return fallback;
}
async function safeParseJSON(response) {
    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch  {
        return {
            message: text || `Server error (${response.status})`
        };
    }
}
// Add Axios response interceptor for unified response handling and error wrapping
api.interceptors.response.use((response)=>{
    return response.data;
}, (error)=>{
    const data = error.response?.data;
    const status = error.response?.status || 500;
    const errMsg = extractErrorMessage(data, `Request failed (${status})`);
    const err = new Error(errMsg);
    err.status = status;
    err.payload = data;
    err.fieldErrors = data?.errors || null;
    return Promise.reject(err);
});
/**
 * Common internal request helper to keep code clean and typed
 */ async function request(path, init = {}) {
    const config = {
        url: path,
        method: init.method || "GET",
        headers: init.headers || {},
        data: init.body
    };
    if (init.body instanceof FormData) {
        // Axios handles FormData boundary headers automatically when Content-Type is not set manually
        delete config.headers["Content-Type"];
    }
    return api(config);
}
async function verifyCertificate(certNumber) {
    try {
        const response = await api.get(`/public/certificate/verify/${encodeURIComponent(certNumber)}`);
        return response;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Certificate not found or invalid.";
        }
        throw err;
    }
}
async function getSurveyorUploadUrls(filenames) {
    const query = new URLSearchParams();
    // cv
    if (filenames.cv) {
        if (typeof filenames.cv === "string") {
            query.append("cv_filename", filenames.cv);
            if (filenames.cv_type) query.append("cv_mimetype", filenames.cv_type);
        } else {
            query.append("cv_filename", filenames.cv.filename);
            query.append("cv_mimetype", filenames.cv.mimetype);
        }
    }
    // id_proof / idProof
    if (filenames.id_proof) {
        query.append("id_proof_filename", filenames.id_proof);
        if (filenames.id_proof_type) query.append("id_proof_mimetype", filenames.id_proof_type);
    } else if (filenames.idProof) {
        query.append("id_proof_filename", filenames.idProof.filename);
        query.append("id_proof_mimetype", filenames.idProof.mimetype);
    }
    // certificates
    if (filenames.certificates && filenames.certificates.length > 0) {
        const first = filenames.certificates[0];
        if (typeof first === "string") {
            query.append("certificate_filenames", JSON.stringify(filenames.certificates));
            if (filenames.certificate_types) {
                query.append("certificate_mimetypes", JSON.stringify(filenames.certificate_types));
            }
        } else {
            const certObjs = filenames.certificates;
            query.append("certificate_filenames", JSON.stringify(certObjs.map((c)=>c.filename)));
            query.append("certificate_mimetypes", JSON.stringify(certObjs.map((c)=>c.mimetype)));
        }
    }
    try {
        const data = await api.get(`/surveyors/get-upload-url?${query.toString()}`);
        const result = data.data || data;
        // Normalize returned keys to support both camelCase and snake_case properties
        if (result) {
            if (result.id_proof && !result.idProof) result.idProof = result.id_proof;
            if (result.idProof && !result.id_proof) result.id_proof = result.idProof;
            if (result.cv) {
                if (result.cv.uploadUrl && !result.cv.url) result.cv.url = result.cv.uploadUrl;
                if (result.cv.url && !result.cv.uploadUrl) result.cv.uploadUrl = result.cv.url;
            }
            if (result.idProof) {
                if (result.idProof.uploadUrl && !result.idProof.url) result.idProof.url = result.idProof.uploadUrl;
                if (result.idProof.url && !result.idProof.uploadUrl) result.idProof.uploadUrl = result.idProof.url;
            }
            if (result.id_proof) {
                if (result.id_proof.uploadUrl && !result.id_proof.url) result.id_proof.url = result.id_proof.uploadUrl;
                if (result.id_proof.url && !result.id_proof.uploadUrl) result.id_proof.uploadUrl = result.id_proof.url;
            }
            if (Array.isArray(result.certificates)) {
                result.certificates.forEach((c)=>{
                    if (c.uploadUrl && !c.url) c.url = c.uploadUrl;
                    if (c.url && !c.uploadUrl) c.uploadUrl = c.url;
                });
            }
        }
        return result;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to get upload URLs.";
        }
        throw err;
    }
}
async function uploadToS3(signedUrl, file) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(signedUrl, file, {
        headers: {
            "Content-Type": file.type || "application/octet-stream"
        }
    });
    if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to upload file to S3 storage.");
    }
}
const uploadToSignedUrl = uploadToS3;
function fileToBase64(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = (error)=>reject(error);
        reader.readAsDataURL(file);
    });
}
const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB in bytes
async function submitSurveyorApplication(formDataOrPayload, files) {
    try {
        // 1. Validate file size (1MB limit)
        if (files) {
            if (files.cv && files.cv.size > MAX_FILE_SIZE) {
                throw new Error("CV file size exceeds 1MB limit.");
            }
            if (files.id_proof && files.id_proof.size > MAX_FILE_SIZE) {
                throw new Error("ID Proof file size exceeds 1MB limit.");
            }
            if (files.certificates) {
                for (const file of files.certificates){
                    if (file && file.size > MAX_FILE_SIZE) {
                        throw new Error(`Certificate "${file.name}" size exceeds 1MB limit.`);
                    }
                }
            }
        }
        let cvKey = formDataOrPayload.cvKey || formDataOrPayload.cv || null;
        let idProofKey = formDataOrPayload.idProofKey || formDataOrPayload.id_proof || null;
        let certificateKeys = formDataOrPayload.certificateKeys || formDataOrPayload.certificates || [];
        if (files) {
            if (files.cv) {
                cvKey = await fileToBase64(files.cv);
            }
            if (files.id_proof) {
                idProofKey = await fileToBase64(files.id_proof);
            }
            if (files.certificates && files.certificates.length > 0) {
                const certTasks = files.certificates.filter((f)=>f && f.size > 0).map((f)=>fileToBase64(f));
                if (certTasks.length > 0) {
                    const base64Certs = await Promise.all(certTasks);
                    certificateKeys = Array.isArray(certificateKeys) ? [
                        ...certificateKeys,
                        ...base64Certs
                    ] : base64Certs;
                }
            }
        }
        // 2. Prepare payload with only the needed keys
        const payload = {
            ...formDataOrPayload
        };
        if (cvKey) {
            payload.cvKey = cvKey;
        }
        if (idProofKey) {
            payload.idProofKey = idProofKey;
        }
        if (Array.isArray(certificateKeys) && certificateKeys.length > 0) {
            payload.certificateKeys = certificateKeys;
        }
        return await api.post("/surveyors/apply", payload);
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to submit application.";
        }
        throw err;
    }
}
async function fetchStaticContent(slug = "") {
    try {
        const url = slug ? `/website/static-content/${encodeURIComponent(slug)}` : `/website/static-content`;
        const data = await api.get(url);
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Page not found";
        }
        throw err;
    }
}
async function fetchPortfolioFeedback() {
    try {
        const data = await api.get("/portfolio-feedback/public");
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to load feedback.";
        }
        throw err;
    }
}
async function submitContactEnquiry(payload) {
    try {
        return await api.post("/contact/", payload);
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to send message.";
        }
        throw err;
    }
}
async function subscribeNewsletter(email, source = "website") {
    try {
        return await api.post("/website/newsletter/subscribe", {
            email,
            source
        });
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to subscribe.";
        }
        throw err;
    }
}
async function searchVessel(imoNumber) {
    try {
        const data = await api.get(`/public/vessel/${encodeURIComponent(String(imoNumber))}`);
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Vessel not found in our registry.";
        }
        throw err;
    }
}
async function fetchPublicFlags() {
    try {
        const data = await api.get("/public/flags");
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to load flags.";
        }
        throw err;
    }
}
const uploadSurveyorDocument = (entityType, entityId, files, documentType, description)=>{
    const fd = new FormData();
    files.forEach((f)=>fd.append("files", f));
    fd.append("document_type", documentType);
    if (description) fd.append("description", description);
    return request(`/documents/${entityType}/${entityId}`, {
        method: "POST",
        body: fd
    });
};
async function fetchFAQs() {
    try {
        const data = await api.get("/website/static-content/faq");
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to load FAQs.";
        }
        throw err;
    }
}
async function fetchNews() {
    try {
        const data = await api.get("/website/static-content/news");
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to load news.";
        }
        throw err;
    }
}
async function fetchPrivacyPolicy() {
    try {
        const data = await api.get("/website/static-content/privacy");
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to load Privacy Policy.";
        }
        throw err;
    }
}
async function fetchCompliance() {
    try {
        const data = await api.get("/website/static-content/terms-compliance");
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to load Compliance.";
        }
        throw err;
    }
}
async function fetchTermsAndConditions() {
    try {
        const data = await api.get("/website/static-content/terms-and-conditions");
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to load Terms and Conditions.";
        }
        throw err;
    }
}
async function fetchAboutUs() {
    try {
        const data = await api.get("/website/static-content/about-us");
        return data.data || data;
    } catch (err) {
        if (err && err.message && err.message.startsWith("Request failed")) {
            err.message = "Failed to load About Us.";
        }
        throw err;
    }
}
const apiBase = API_BASE;
}),
"[project]/src/lib/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Site-wide configuration. Single source of truth for brand strings,
 * navigation, and contact info. Treat like a Next.js `lib/config.ts`.
 */ __turbopack_context__.s([
    "mainNav",
    ()=>mainNav,
    "site",
    ()=>site,
    "utilNav",
    ()=>utilNav
]);
const site = {
    name: "GR Class",
    tagline: "Classified for Standards",
    description: "Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS) authorized to offer statutory/class certification and services.",
    url: "https://grclass.com",
    ops: "https://ops.grclass.com",
    email: "info@grclass.com",
    phone: "+971555324087",
    address: "B.C. 1304883, C1 Building, Ajman District Business, Makani No – 4442612247, UAE.",
    additionalOffices: [
        {
            name: "India Office",
            address: "Office No - 6, Hermes Atrium, Sector -11, CBD Belapur, Navi Mumbai, Maharashtra, India."
        },
        {
            name: "Greece Office",
            address: "Notara Str. 110, Piraeus, 18535, Greece."
        },
        {
            name: "Panama Office",
            address: "Edificio Global Plaza, Calle 50, Piso 21, Republic de Panama."
        }
    ]
};
const mainNav = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "How it Works",
        href: "/how-it-works"
    },
    {
        label: "Services",
        href: "/services",
        children: [
            {
                heading: "Classification",
                items: [
                    {
                        label: "Fleet in Services",
                        href: "/services/fleet-in-services"
                    },
                    {
                        label: "New Construction",
                        href: "/services/new-construction"
                    },
                    {
                        label: "Transfer of Class",
                        href: "/services/transfer-of-class"
                    },
                    {
                        label: "Yacht Service",
                        href: "/services/yacht-service"
                    },
                    {
                        label: "Offshore Service",
                        href: "/services/offshore-service"
                    },
                    {
                        label: "Conversion Projects",
                        href: "/services/conversion-projects"
                    },
                    {
                        label: "Plan & Manual Approval",
                        href: "/services/plan-approval"
                    }
                ]
            },
            {
                heading: "Statutory Services",
                items: [
                    {
                        label: "Flag Statutory Services",
                        href: "/services/flag-statutory-services"
                    },
                    {
                        label: "Survey & Certification",
                        href: "/services/survey-certification"
                    },
                    {
                        label: "SOLAS",
                        href: "/services/solas"
                    },
                    {
                        label: "MARPOL",
                        href: "/services/marpol"
                    },
                    {
                        label: "Load Line",
                        href: "/services/load-line"
                    },
                    {
                        label: "Tonnage",
                        href: "/services/tonnage"
                    },
                    {
                        label: "MODU",
                        href: "/services/modu"
                    }
                ]
            },
            {
                heading: "Environmental",
                items: [
                    {
                        label: "Ballast Water Management",
                        href: "/services/ballast-water-management"
                    },
                    {
                        label: "IHM & Ship Recycling",
                        href: "/services/ihm-ship-recycling"
                    },
                    {
                        label: "Energy Efficiency",
                        href: "/services/energy-efficiency"
                    },
                    {
                        label: "EU MRV Compliance",
                        href: "/services/eu-mrv-compliance"
                    },
                    {
                        label: "Emergency Response",
                        href: "/services/vessel-emergency-response"
                    }
                ]
            },
            {
                heading: "Other Services",
                items: [
                    {
                        label: "Compliance Support",
                        href: "/services/compliance-support"
                    },
                    {
                        label: "Remote Surveys",
                        href: "/services/remote-surveys"
                    },
                    {
                        label: "Port State Control",
                        href: "/services/port-state-control"
                    },
                    {
                        label: "Technical Advisory",
                        href: "/services/technical-advisory"
                    }
                ]
            }
        ]
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "News",
        href: "/news"
    },
    {
        label: "FAQ",
        href: "/faq"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
const utilNav = [
    {
        label: "EN",
        href: "#"
    },
    {
        label: "Investors",
        href: "/investors"
    },
    {
        label: "Careers",
        href: "/careers"
    },
    {
        label: "Press",
        href: "/press"
    },
    {
        label: "Vessel Search",
        href: "/vessel-search"
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0jg9xdu._.js.map