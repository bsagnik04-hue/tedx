;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="0684ce20-3767-ae58-bc8f-eb8b09c79876")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,744061,418638,e=>{"use strict";var t=e.i(478902),s=e.i(938933),a=e.i(843778);function r({children:e,className:s,tag:a="div",style:r}){let n=`${a}`;return(0,t.jsx)(n,{style:r,children:e})}r.Title=function({className:e,level:s=1,children:a,style:r}){let n=`h${s}`;return(0,t.jsx)(n,{style:r,children:a})},r.Text=function({className:e,children:s,style:a,type:r,disabled:n,mark:i,code:o,keyboard:l,underline:c,strikethrough:u,strong:d,small:m}){return o?(0,t.jsx)("code",{style:a,children:s}):i?(0,t.jsx)("mark",{style:a,children:s}):l?(0,t.jsx)("kbd",{style:a,children:s}):d?(0,t.jsx)("strong",{style:a,children:s}):(0,t.jsx)("span",{style:a,children:s})},r.Link=function({children:e,target:s="_blank",href:a,className:r,onClick:n,style:i}){return(0,t.jsx)("a",{onClick:n,href:a,target:s,rel:"noopener noreferrer",style:i,children:e})},e.s(["default",0,r],418638);var n=e.i(389959);let i=(0,n.createContext)({type:"text"}),o=e=>{let{type:s}=e;return(0,t.jsx)(i.Provider,{value:{type:s},children:e.children})},l=()=>{let e=(0,n.useContext)(i);if(void 0===e)throw Error("MenuContext must be used within a MenuContextProvider.");return e};function c({children:e,className:s,ulClassName:a,style:r,type:n="text"}){return(0,t.jsx)("nav",{role:"menu","aria-label":"Sidebar","aria-orientation":"vertical","aria-labelledby":"options-menu",className:s,style:r,children:(0,t.jsx)(o,{type:n,children:(0,t.jsx)("ul",{className:a,children:e})})})}c.Item=function({children:e,icon:r,active:n,rounded:i,onClick:o,doNotCloseOverlay:c=!1,showActiveBar:u=!1,style:d}){let m=(0,s.default)("menu"),{type:h}=l(),p=[m.item.base];p.push(m.item.variants[h].base),n?p.push(m.item.variants[h].active):p.push(m.item.variants[h].normal);let f=[m.item.content.base];n?f.push(m.item.content.active):f.push(m.item.content.normal);let _=[m.item.icon.base];return n?_.push(m.item.icon.active):_.push(m.item.icon.normal),(0,t.jsxs)("li",{role:"menuitem",className:(0,a.cn)("outline-none",p),style:d,onClick:o,"aria-current":n?"page":void 0,children:[r&&(0,t.jsx)("div",{className:`${_.join(" ")} min-w-fit`,children:r}),(0,t.jsx)("span",{className:f.join(" "),children:e})]})},c.Group=function({children:e,icon:a,title:r}){let n=(0,s.default)("menu"),{type:i}=l();return(0,t.jsxs)("div",{className:[n.group.base,n.group.variants[i]].join(" "),children:[a&&(0,t.jsx)("span",{className:n.group.icon,children:a}),(0,t.jsx)("span",{className:n.group.content,children:r}),e]})},c.Misc=function({children:e}){return(0,t.jsx)("div",{children:(0,t.jsx)(r.Text,{children:(0,t.jsx)("span",{children:e})})})},e.s(["default",0,c],744061)},862326,e=>{"use strict";var t=e.i(744061);e.s(["Menu",()=>t.default])},799793,e=>{"use strict";var t=e.i(478902),s=e.i(462813),a=e.i(587433),r=e.i(837710),n=e.i(862326);e.s(["ProductMenuItem",0,({item:e,isActive:i,target:o="_self",hoverText:l="",onClick:c})=>{let{name:u="",url:d="",icon:m,rightIcon:h,isExternal:p,label:f,disabled:_}=e,g=(0,t.jsx)(n.Menu.Item,{icon:m,active:i,onClick:c,children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1 min-w-0 flex-1",title:l||("string"==typeof u?u:""),children:[(0,t.jsx)("span",{className:"truncate flex-1 min-w-0",children:u}),void 0!==f&&(0,t.jsx)(a.Badge,{className:"flex-shrink-0",variant:"new"===f.toLowerCase()?"success":"warning",children:f})]}),h&&(0,t.jsx)("div",{children:h})]})});return _?(0,t.jsx)("div",{className:"opacity-50 pointer-events-none",children:g}):d?p?(0,t.jsx)(r.Button,{asChild:!0,block:!0,className:"!justify-start",type:"text",size:"small",icon:m,children:(0,t.jsx)(s.default,{href:d,target:"_blank",rel:"noreferrer",children:u})}):(0,t.jsx)(s.default,{href:d,className:"block",target:o,onClick:c,children:g}):g}])},388147,e=>{"use strict";var t=e.i(478902),s=e.i(587433),a=e.i(862326),r=e.i(799793);e.s(["ProductMenu",0,({page:e,menu:n,onItemClick:i})=>(0,t.jsx)("div",{className:"flex flex-col space-y-4",children:(0,t.jsx)(a.Menu,{type:"pills",children:n.map((o,l)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"my-4 space-y-4",children:(0,t.jsxs)("div",{className:"md:mx-3",children:[(0,t.jsx)(a.Menu.Group,{title:o.title?(0,t.jsxs)("div",{className:"flex flex-col space-y-2 uppercase font-mono",children:[(0,t.jsx)("span",{children:o.title}),o.isPreview&&(0,t.jsx)(s.Badge,{variant:"warning",children:"Not production ready"})]}):null}),(0,t.jsx)("div",{children:o.items.map(s=>{let a=s.pages?s.pages.includes(e??""):e===s.key;return(0,t.jsx)(r.ProductMenuItem,{item:s,isActive:a,target:s.isExternal?"_blank":"_self",onClick:i},s.key)})})]})}),l!==n.length-1&&(0,t.jsx)("div",{className:"h-px w-[calc(100%-1.5rem)] mx-auto md:w-full bg-border-overlay"})]},o.key||o.title))})})])},852315,e=>{"use strict";let t=(0,e.i(388019).default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);e.s(["ArrowUpRight",()=>t],852315)},737051,e=>{"use strict";e.i(128328);var t=e.i(657588),s=e.i(265735);let a=e=>{let a=(0,t.useFlag)(e),{data:r}=(0,s.useSelectedOrganizationQuery)(),n="string"==typeof a?a.split(",").map(e=>e.trim()):[];return!!n.includes("all")||n.includes(r?.slug??"")};e.s(["useIsETLBigQueryPrivateAlpha",0,()=>a("etlEnableBigQueryPrivateAlpha"),"useIsETLIcebergPrivateAlpha",0,()=>a("etlEnableIcebergPrivateAlpha"),"useIsETLPrivateAlpha",0,()=>{let e=a("etlEnableBigQueryPrivateAlpha"),t=a("etlEnableIcebergPrivateAlpha");return e||t}])},812136,e=>{"use strict";var t=e.i(478902),s=e.i(711339),a=e.i(825713);e.i(128328);var r=e.i(158639),n=e.i(852315),i=e.i(463333),o=e.i(737051),l=e.i(450972),c=e.i(144676),u=e.i(912793),d=e.i(635494),m=e.i(10429);let h=(0,t.jsx)(n.ArrowUpRight,{strokeWidth:1,className:"h-4 w-4"});var p=e.i(388147),f=e.i(951138);let _=()=>{let e=(0,s.useRouter)().pathname.split("/")[4],a=(()=>{let{ref:e}=(0,r.useParams)(),{data:t}=(0,d.useSelectedProjectQuery)(),{databaseReplication:s,databaseRoles:a,integrationsWrappers:n}=(0,u.useIsFeatureEnabled)(["database:replication","database:roles","integrations:wrappers"]),{data:p}=(0,l.useDatabaseExtensionsQuery)({projectRef:t?.ref,connectionString:t?.connectionString}),{data:f}=(0,c.useProjectAddonsQuery)({projectRef:t?.ref}),_=(p??[]).some(e=>"pg_net"===e.name),g=f?.selected_addons.some(e=>"pitr"===e.type)??!1,b=(0,i.useIsColumnLevelPrivilegesEnabled)(),x=(0,o.useIsETLPrivateAlpha)(),y=t=>`/project/${e}/database/${t}`;return[{title:"Database Management",items:[{name:"Schema Visualizer",key:"schemas",url:y("schemas")},{name:"Tables",key:"tables",url:y("tables")},{name:"Functions",key:"functions",url:y("functions")},{name:"Triggers",key:"triggers",url:y("triggers/data")},{name:"Enumerated Types",key:"types",url:y("types")},{name:"Extensions",key:"extensions",url:y("extensions")},{name:"Indexes",key:"indexes",url:y("indexes")},{name:"Publications",key:"publications",url:y("publications")}]},{title:"Configuration",items:[a&&{name:"Roles",key:"roles",url:y("roles")},b&&{name:"Column Privileges",key:"column-privileges",url:y("column-privileges")},{name:"Policies",key:"policies",url:`/project/${e}/auth/policies`,rightIcon:h},{name:"Settings",key:"settings",url:y("settings")}].filter(Boolean)},{title:"Platform",items:[m.IS_PLATFORM&&s&&{name:"Replication",key:"replication",url:y("replication"),label:x?"New":void 0},m.IS_PLATFORM&&{name:"Backups",key:"backups",url:y(g?"backups/pitr":"backups/scheduled")},{name:"Migrations",key:"migrations",url:y("migrations")},n&&{name:"Wrappers",key:"wrappers",url:`/project/${e}/integrations?category=wrapper`,rightIcon:h},_&&{name:"Database Webhooks",key:"hooks",url:`/project/${e}/integrations/webhooks/overview`,rightIcon:h}].filter(Boolean)},{title:"Tools",items:[{name:"Security Advisor",key:"security-advisor",url:`/project/${e}/advisors/security`,rightIcon:h},{name:"Performance Advisor",key:"performance-advisor",url:`/project/${e}/advisors/performance`,rightIcon:h},{name:"Query Performance",key:"query-performance",url:`/project/${e}/observability/query-performance`,rightIcon:h}]}]})();return(0,t.jsx)(p.ProductMenu,{page:e,menu:a})},g=(0,f.withAuth)(({children:e,title:s})=>(0,t.jsx)(a.ProjectLayout,{product:"Database",browserTitle:{section:s},productMenu:(0,t.jsx)(_,{}),isBlocking:!1,children:e}));e.s(["DatabaseProductMenu",0,_,"default",0,g],812136)},983783,e=>{"use strict";e.i(128328);var t=e.i(947748),s=e.i(158639),a=e.i(479388),r=e.i(389959);e.s(["useQuerySchemaState",0,()=>{var e;let{ref:n}=(0,s.useParams)(),i=window.localStorage&&n&&n.length>0&&window.localStorage.getItem(t.LOCAL_STORAGE_KEYS.LAST_SELECTED_SCHEMA(n))||"public",[o,l]=(e=(0,r.useMemo)(()=>i,[n]),(0,a.useQueryState)("schema",a.parseAsString.withDefault(e).withOptions({clearOnDefault:!1})));return(0,r.useEffect)(()=>{window.localStorage&&n&&n.length>0&&window.localStorage.setItem(t.LOCAL_STORAGE_KEYS.LAST_SELECTED_SCHEMA(n),o)},[o,n]),{selectedSchema:o,setSelectedSchema:l}}])},300424,e=>{"use strict";var t=e.i(478902),s=e.i(934302),a=e.i(370410),r=e.i(365257),n=e.i(544197),i=e.i(389959),o=e.i(178527),l=e.i(206413),c=e.i(592360),u=e.i(837710),d=e.i(866205),m=e.i(703526),h=e.i(917007),p=e.i(920432),f=e.i(549815),_=e.i(911509),g=e.i(996960),b=e.i(689805),x=e.i(793912),y=e.i(135144),j=e.i(396831),v=e.i(903248),k=e.i(801834),S=e.i(2579),w=e.i(635494);let E=({className:e,disabled:E=!1,size:N="tiny",showError:P=!0,selectedSchemaName:C,placeholderLabel:A="Choose a schema...",supportSelectAll:T=!1,excludedSchemas:q=[],stopScrollPropagation:R=!1,onSelectSchema:I,onSelectCreateSchema:D,align:O="start"})=>{let[$,L]=(0,i.useState)(!1),{can:M}=(0,S.useAsyncCheckPermissions)(s.PermissionAction.TENANT_SQL_ADMIN_WRITE,"schemas"),{data:F}=(0,w.useSelectedProjectQuery)(),{data:z,isPending:B,isSuccess:U,isError:W,error:H,refetch:Q}=(0,k.useSchemasQuery)({projectRef:F?.ref,connectionString:F?.connectionString}),G=(z||[]).filter(e=>!q.includes(e.name)).sort((e,t)=>e.name.localeCompare(t.name));return(0,t.jsxs)("div",{className:e,children:[B&&(0,t.jsx)(u.Button,{type:"default",className:"w-full [&>span]:w-full",size:N,disabled:!0,children:(0,t.jsx)(v.Skeleton,{className:"w-full h-3 bg-foreground-muted"})},"schema-selector-skeleton"),P&&W&&(0,t.jsxs)(o.Alert_Shadcn_,{variant:"warning",className:"!px-3 !py-3",children:[(0,t.jsx)(c.AlertTitle_Shadcn_,{className:"text-xs text-amber-900",children:"Failed to load schemas"}),(0,t.jsxs)(l.AlertDescription_Shadcn_,{className:"text-xs mb-2 break-words",children:["Error: ",H?.message]}),(0,t.jsx)(u.Button,{type:"default",size:"tiny",onClick:()=>Q(),children:"Reload schemas"})]}),U&&(0,t.jsxs)(b.Popover_Shadcn_,{open:$,onOpenChange:L,modal:!1,children:[(0,t.jsx)(y.PopoverTrigger_Shadcn_,{asChild:!0,children:(0,t.jsx)(u.Button,{size:N,disabled:E,type:"default","data-testid":"schema-selector",className:"w-full [&>span]:w-full !pr-1 space-x-1",iconRight:(0,t.jsx)(r.ChevronsUpDown,{className:"text-foreground-muted",strokeWidth:2,size:14}),children:C?(0,t.jsxs)("div",{className:"w-full flex gap-1",children:[(0,t.jsx)("p",{className:"text-foreground-lighter",children:"schema"}),(0,t.jsx)("p",{className:"text-foreground",children:"*"===C?"All schemas":C})]}):(0,t.jsx)("div",{className:"w-full flex gap-1",children:(0,t.jsx)("p",{className:"text-foreground-lighter",children:A})})})}),(0,t.jsx)(x.PopoverContent_Shadcn_,{className:"p-0 min-w-[200px] pointer-events-auto",side:"bottom",align:O,sameWidthAsTrigger:!0,children:(0,t.jsxs)(d.Command_Shadcn_,{children:[(0,t.jsx)(p.CommandInput_Shadcn_,{className:"text-xs",placeholder:"Find schema..."}),(0,t.jsxs)(_.CommandList_Shadcn_,{onWheel:R?e=>e.stopPropagation():void 0,children:[(0,t.jsx)(m.CommandEmpty_Shadcn_,{children:"No schemas found"}),(0,t.jsx)(h.CommandGroup_Shadcn_,{children:(0,t.jsxs)(j.ScrollArea,{className:(G||[]).length>7?"h-[210px]":"",children:[T&&(0,t.jsxs)(f.CommandItem_Shadcn_,{className:"cursor-pointer flex items-center justify-between space-x-2 w-full",onSelect:()=>{I("*"),L(!1)},onClick:()=>{I("*"),L(!1)},children:[(0,t.jsx)("span",{children:"All schemas"}),"*"===C&&(0,t.jsx)(a.Check,{className:"text-brand",strokeWidth:2,size:16})]},"select-all"),G.map(e=>(0,t.jsxs)(f.CommandItem_Shadcn_,{className:"cursor-pointer flex items-center justify-between space-x-2 w-full",onSelect:()=>{I(e.name),L(!1)},onClick:()=>{I(e.name),L(!1)},children:[(0,t.jsx)("span",{children:e.name}),C===e.name&&(0,t.jsx)(a.Check,{className:"text-brand",strokeWidth:2,size:16})]},e.id))]})}),void 0!==D&&M&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.CommandSeparator_Shadcn_,{}),(0,t.jsx)(h.CommandGroup_Shadcn_,{children:(0,t.jsxs)(f.CommandItem_Shadcn_,{className:"cursor-pointer flex items-center gap-x-2 w-full",onSelect:()=>{D(),L(!1)},onClick:()=>{D(),L(!1)},children:[(0,t.jsx)(n.Plus,{size:12}),"Create a new schema"]})})]})]})]})})]})]})};e.s(["SchemaSelector",0,E,"default",0,E])},194576,e=>{"use strict";var t=e.i(478902),s=e.i(221287),a=e.i(938933);let r=({open:e,children:a,className:r,...n})=>(0,t.jsx)(s.Root,{asChild:n.asChild,defaultOpen:n.defaultOpen,open:e,onOpenChange:n.onOpenChange,disabled:n.disabled,className:r,children:a});r.Trigger=function({children:e,asChild:a}){return(0,t.jsx)(s.Trigger,{asChild:a,children:e})},r.Content=function({asChild:e,children:r,className:n}){let i=(0,a.default)("collapsible");return(0,t.jsx)(s.Content,{asChild:e,className:[i.content,n].join(" "),children:r})},e.s(["default",0,r])},58359,e=>{"use strict";var t=e.i(194576);e.s(["Collapsible",()=>t.default])},698175,e=>{"use strict";var t=e.i(478902),s=e.i(389959),a=e.i(753515),r=e.i(440401),n=e.i(701823),i=e.i(938933),o=e.i(140449);function l({autoComplete:e,autofocus:l,children:c,className:u,descriptionText:d,disabled:m,error:h,icon:p,id:f="",inputRef:_,label:g,afterLabel:b,beforeLabel:x,labelOptional:y,layout:j,name:v="",onChange:k,onBlur:S,placeholder:w,required:E,value:N,defaultValue:P,style:C,size:A="medium",borderless:T=!1,validation:q,...R}){let{formContextOnChange:I,values:D,errors:O,handleBlur:$,touched:L,fieldLevelValidation:M}=(0,o.useFormContext)();D&&!N&&(N=D[f]),h||(O&&!h&&(h=O[f||v]),h=L&&L[f||v]?h:void 0),(0,s.useEffect)(()=>{q&&M(f,q(N))},[]);let F=(0,i.default)("select"),z=[F.container];u&&z.push(u);let B=[F.base];return h&&B.push(F.variants.error),h||B.push(F.variants.standard),p&&B.push(F.with_icon[A]),A&&B.push(F.size[A]),m&&B.push(F.disabled),(0,t.jsx)(a.FormLayout,{label:g,afterLabel:b,beforeLabel:x,labelOptional:y,layout:j,id:f,error:h,descriptionText:d,className:u,style:C,size:A,children:(0,t.jsxs)("div",{className:F.container,children:[(0,t.jsx)("select",{id:f,name:v,"data-size":A,defaultValue:P,autoComplete:e,autoFocus:l,className:B.join(" "),onChange:function(e){k&&k(e),I&&I(e),q&&M(f,q(e.target.value))},onBlur:function(e){$&&$(e),S&&S(e)},ref:_,value:N,disabled:m,required:E,placeholder:w,...R,children:c}),p&&(0,t.jsx)(n.default,{size:A,icon:p}),h&&(0,t.jsx)("div",{className:F.actions_container,children:h&&(0,t.jsx)(r.default,{size:A})}),(0,t.jsx)("span",{className:F.chevron_container,children:(0,t.jsx)("svg",{className:F.chevron,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})})}l.Option=function({value:e,children:s,selected:a}){return(0,t.jsx)("option",{value:e,selected:a,children:s})},l.OptGroup=function({label:e,children:s}){return(0,t.jsx)("optgroup",{label:e,children:s})},e.s(["default",0,l])},749199,e=>{"use strict";var t=e.i(242882),s=e.i(820308),a=e.i(150671),r=e.i(714403),n=e.i(635494),i=e.i(189329);e.s(["default",0,({sql:e,params:o=s.DEFAULT_QUERY_PARAMS,where:l,orderBy:c})=>{let{data:u}=(0,n.useSelectedProjectQuery)(),d=(0,i.useDatabaseSelectorStateSnapshot)(),{data:m}=(0,a.useReadReplicasQuery)({projectRef:u?.ref}),h=(m||[]).find(e=>e.identifier===d.selectedDatabaseId)?.connectionString,p=d.selectedDatabaseId,f="function"==typeof e?e([]):e,{data:_,error:g,isPending:b,isRefetching:x,refetch:y}=(0,t.useQuery)({queryKey:["projects",u?.ref,"db",{...o,sql:f,identifier:p},l,c],queryFn:({signal:e})=>(0,r.executeSql)({projectRef:u?.ref,connectionString:h||u?.connectionString,sql:f},e).then(e=>e.result),enabled:!!f,refetchOnWindowFocus:!1,refetchOnReconnect:!1});return{error:g||("object"==typeof _?_?.error:""),data:_,isLoading:b,isRefetching:x,params:o,runQuery:y,resolvedSql:f}}])},888525,760255,284399,e=>{"use strict";var t=e.i(355901),s=e.i(714403),a=e.i(392491);function r(e=[]){return{hypopg:e.find(e=>"hypopg"===e.name),indexAdvisor:e.find(e=>"index_advisor"===e.name)}}function n(e,t){if(void 0===e||void 0===t)return 0;let s=Number(e),a=Number(t);return s<=0||s<=a?0:(s-a)/s*100}async function i({projectRef:e,connectionString:a,indexStatements:r,onSuccess:n,onError:i}){if(!e){let e=Error("Project ref is required");return i&&i(e),Promise.reject(e)}if(0===r.length){let e=Error("No index statements provided");return i&&i(e),Promise.reject(e)}try{return await (0,s.executeSql)({projectRef:e,connectionString:a,sql:r.join(";\n")+";"}),t.toast.success("Successfully created index"),n&&n(),Promise.resolve()}catch(e){return t.toast.error(`Failed to create index: ${e.message}`),i&&i(e),Promise.reject(e)}}function o(e,t){return!!(t&&e?.index_statements&&e.index_statements.length>0)}function l(e){return e&&0!==e.length?e.filter(e=>{let t=e.match(/ON\s+(?:"?(\w+)"?\.|(\w+)\.)/i);if(!t)return!0;let s=t[1]||t[2];return!s||!a.INTERNAL_SCHEMAS.includes(s.toLowerCase())}):[]}function c(e){if(!e||!e.index_statements)return e??null;let t=l(e.index_statements);return 0===t.length?null:{...e,index_statements:t}}function u(e){if(!e)return!1;let t=e.toLowerCase();return a.INTERNAL_SCHEMAS.some(e=>RegExp(`(?:from|join|update|insert\\s+into|delete\\s+from)\\s+(?:${e}\\.|"${e}"\\.)`,"i").test(t))}e.s(["calculateImprovement",()=>n,"createIndexes",()=>i,"filterProtectedSchemaIndexAdvisorResult",()=>c,"filterProtectedSchemaIndexStatements",()=>l,"getIndexAdvisorExtensions",()=>r,"hasIndexRecommendations",()=>o,"queryInvolvesProtectedSchemas",()=>u],760255);var d=e.i(450972),m=e.i(635494);function h(){let{data:e}=(0,m.useSelectedProjectQuery)(),{data:t}=(0,d.useDatabaseExtensionsQuery)({projectRef:e?.ref,connectionString:e?.connectionString}),{hypopg:s,indexAdvisor:a}=r(t??[]),n=!!s&&!!a,i=n&&null!==s.installed_version&&null!==a.installed_version;return{isIndexAdvisorAvailable:n,isIndexAdvisorEnabled:i}}e.s(["useIndexAdvisorStatus",()=>h],888525);var p=e.i(478902),f=e.i(389959),_=e.i(232520),g=e.i(837710),b=e.i(610144),x=e.i(967052);e.s(["EnableIndexAdvisorButton",0,()=>{let e=(0,x.useTrack)(),{data:s}=(0,m.useSelectedProjectQuery)(),[a,n]=(0,f.useState)(!1),{data:i}=(0,d.useDatabaseExtensionsQuery)({projectRef:s?.ref,connectionString:s?.connectionString}),{hypopg:o,indexAdvisor:l}=r(i),{mutateAsync:c,isPending:u}=(0,b.useDatabaseExtensionEnableMutation)(),h=async()=>{if(void 0===s)return t.toast.error("Project is required");try{o?.installed_version===null&&await c({projectRef:s?.ref,connectionString:s?.connectionString,name:o.name,schema:o?.schema??"extensions",version:o.default_version}),l?.installed_version===null&&await c({projectRef:s?.ref,connectionString:s?.connectionString,name:l.name,schema:l?.schema??"extensions",version:l.default_version}),t.toast.success("Successfully enabled Index Advisor!"),n(!1)}catch(e){t.toast.error(`Failed to enable Index Advisor: ${e.message}`)}};return(0,p.jsxs)(_.AlertDialog,{open:a,onOpenChange:()=>n(!a),children:[(0,p.jsx)(_.AlertDialogTrigger,{asChild:!0,children:(0,p.jsx)(g.Button,{type:"primary",onClick:()=>e("index_advisor_banner_enable_button_clicked"),children:"Enable"})}),(0,p.jsxs)(_.AlertDialogContent,{children:[(0,p.jsxs)(_.AlertDialogHeader,{children:[(0,p.jsx)(_.AlertDialogTitle,{children:"Enable Index Advisor"}),(0,p.jsxs)(_.AlertDialogDescription,{children:["This will enable the ",(0,p.jsx)("code",{className:"text-code-inline",children:"index_advisor"})," and"," ",(0,p.jsx)("code",{className:"text-code-inline",children:"hypopg"})," Postgres extensions so Index Advisor can analyse queries and suggest performance-improving indexes."]})]}),(0,p.jsxs)(_.AlertDialogFooter,{children:[(0,p.jsx)(_.AlertDialogCancel,{children:"Cancel"}),(0,p.jsx)(_.AlertDialogAction,{onClick:t=>{t.preventDefault(),h(),e("index_advisor_dialog_enable_button_clicked")},disabled:u,children:u?"Enabling...":"Enable"})]})]})]})}],284399)},610144,e=>{"use strict";e.i(850036);var t=e.i(53336),s=e.i(38429),a=e.i(356003),r=e.i(355901),n=e.i(667286),i=e.i(78162),o=e.i(714403);async function l({projectRef:e,connectionString:s,schema:a,name:r,version:n,cascade:i=!1,createSchema:l=!1}){let c=new Headers;s&&c.set("x-connection-encrypted",s);let u=(0,t.getEnableDatabaseExtensionSQL)({schema:a,name:r,version:n,cascade:i,createSchema:l}),{result:d}=await (0,o.executeSql)({projectRef:e,connectionString:s,sql:u,queryKey:["extension","create"]});return d}e.s(["useDatabaseExtensionEnableMutation",0,({onSuccess:e,onError:t,...o}={})=>{let c=(0,a.useQueryClient)();return(0,s.useMutation)({mutationFn:e=>l(e),async onSuccess(t,s,a){let{projectRef:r}=s;await Promise.all([c.invalidateQueries({queryKey:n.databaseExtensionsKeys.list(r)}),c.invalidateQueries({queryKey:i.configKeys.upgradeEligibility(r)})]),await e?.(t,s,a)},async onError(e,s,a){void 0===t?r.toast.error(`Failed to enable database extension: ${e.message}`):t(e,s,a)},...o})}])},820308,775159,e=>{"use strict";var t,s,a=e.i(55956),r=((t={}).API="api",t.STORAGE="storage",t.AUTH="auth",t.QUERY_PERFORMANCE="query_performance",t.DATABASE="database",t);e.s(["Presets",()=>r],775159);var n=((s={}).LAST_10_MINUTES="Last 10 minutes",s.LAST_30_MINUTES="Last 30 minutes",s.LAST_60_MINUTES="Last 60 minutes",s.LAST_3_HOURS="Last 3 hours",s.LAST_24_HOURS="Last 24 hours",s.LAST_7_DAYS="Last 7 days",s.LAST_14_DAYS="Last 14 days",s.LAST_28_DAYS="Last 28 days",s);let i=[{text:"Last 10 minutes",calcFrom:()=>(0,a.default)().subtract(10,"minute").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 30 minutes",calcFrom:()=>(0,a.default)().subtract(30,"minute").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 60 minutes",calcFrom:()=>(0,a.default)().subtract(1,"hour").toISOString(),calcTo:()=>(0,a.default)().toISOString(),default:!0,availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 3 hours",calcFrom:()=>(0,a.default)().subtract(3,"hour").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 24 hours",calcFrom:()=>(0,a.default)().subtract(1,"day").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 7 days",calcFrom:()=>(0,a.default)().subtract(7,"day").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["pro","team","enterprise"]},{text:"Last 14 days",calcFrom:()=>(0,a.default)().subtract(14,"day").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["team","enterprise"]},{text:"Last 28 days",calcFrom:()=>(0,a.default)().subtract(28,"day").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["team","enterprise"]}],o={iso_timestamp_start:i[0].calcFrom(),iso_timestamp_end:i[0].calcTo()},l=(e,t=!0)=>{if(0===e.length)return"";let s=e.map(e=>{let t=e.key.split("."),s=[t[t.length-2],t[t.length-1]].join("."),a=e.key.includes(".")?s:e.key,r=e.value.toString().includes('"')||e.value.toString().includes("'"),n=!isNaN(Number(e.value)),i=!n&&r?e.value:`'${e.value}'`,o=!n&&String(i).toLowerCase(),l=n?e.value:o;switch(e.compare){case"matches":return`REGEXP_CONTAINS(${a}, ${l})`;case"is":default:return`${a} = ${l}`;case"!=":return`${a} != ${l}`;case">=":return`${a} >= ${l}`;case"<=":return`${a} <= ${l}`;case">":return`${a} > ${l}`;case"<":return`${a} < ${l}`}}).filter(Boolean).join(" AND ");return""===s?"":t?"WHERE "+s:"AND "+s},c={[r.API]:{title:"API",queries:{totalRequests:{queryType:"logs",sql:e=>`
        -- reports-api-total-requests
        select
          cast(timestamp_trunc(t.timestamp, hour) as datetime) as timestamp,
          count(t.id) as count
        FROM edge_logs t
          cross join unnest(metadata) as m
          cross join unnest(m.response) as response
          cross join unnest(m.request) as request
          cross join unnest(request.headers) as headers
          ${l(e)}
        GROUP BY
          timestamp
        ORDER BY
          timestamp ASC`},topRoutes:{queryType:"logs",sql:e=>`
        -- reports-api-top-routes
        select
          request.path as path,
          request.method as method,
          request.search as search,
          response.status_code as status_code,
          count(t.id) as count
        from edge_logs t
          cross join unnest(metadata) as m
          cross join unnest(m.response) as response
          cross join unnest(m.request) as request
          cross join unnest(request.headers) as headers
          ${l(e)}
        group by
          request.path, request.method, request.search, response.status_code
        order by
          count desc
        limit 10
        `},errorCounts:{queryType:"logs",sql:e=>`
        -- reports-api-error-counts
        select
          cast(timestamp_trunc(t.timestamp, hour) as datetime) as timestamp,
          count(t.id) as count
        FROM edge_logs t
          cross join unnest(metadata) as m
          cross join unnest(m.response) as response
          cross join unnest(m.request) as request
          cross join unnest(request.headers) as headers
        WHERE
          response.status_code >= 400
        ${l(e,!1)}
        GROUP BY
          timestamp
        ORDER BY
          timestamp ASC
        `},topErrorRoutes:{queryType:"logs",sql:e=>`
        -- reports-api-top-error-routes
        select
          request.path as path,
          request.method as method,
          request.search as search,
          response.status_code as status_code,
          count(t.id) as count
        from edge_logs t
          cross join unnest(metadata) as m
          cross join unnest(m.response) as response
          cross join unnest(m.request) as request
          cross join unnest(request.headers) as headers
        where
          response.status_code >= 400
        ${l(e,!1)}
        group by
          request.path, request.method, request.search, response.status_code
        order by
          count desc
        limit 10
        `},responseSpeed:{queryType:"logs",sql:e=>`
        -- reports-api-response-speed
        select
          cast(timestamp_trunc(t.timestamp, hour) as datetime) as timestamp,
          avg(response.origin_time) as avg
        FROM
          edge_logs t
          cross join unnest(metadata) as m
          cross join unnest(m.response) as response
          cross join unnest(m.request) as request
          cross join unnest(request.headers) as headers
          ${l(e)}
        GROUP BY
          timestamp
        ORDER BY
          timestamp ASC
      `},topSlowRoutes:{queryType:"logs",sql:e=>`
        -- reports-api-top-slow-routes
        select
          request.path as path,
          request.method as method,
          request.search as search,
          response.status_code as status_code,
          count(t.id) as count,
          avg(response.origin_time) as avg
        from edge_logs t
          cross join unnest(metadata) as m
          cross join unnest(m.response) as response
          cross join unnest(m.request) as request
          cross join unnest(request.headers) as headers
        ${l(e)}
        group by
          request.path, request.method, request.search, response.status_code
        order by
          avg desc
        limit 10
        `},networkTraffic:{queryType:"logs",sql:e=>`
        -- reports-api-network-traffic
        select
          cast(timestamp_trunc(t.timestamp, hour) as datetime) as timestamp,
          coalesce(
            safe_divide(
              sum(
                cast(coalesce(headers.content_length, "0") as int64)
              ),
              1000000
            ),
            0
          ) as ingress_mb,
          coalesce(
            safe_divide(
              sum(
                cast(coalesce(resp_headers.content_length, "0") as int64)
              ),
              1000000
            ),
            0
          ) as egress_mb,
        FROM
          edge_logs t
          cross join unnest(metadata) as m
          cross join unnest(m.response) as response
          cross join unnest(m.request) as request
          cross join unnest(request.headers) as headers
          cross join unnest(response.headers) as resp_headers
          ${l(e)}
        GROUP BY
          timestamp
        ORDER BY
          timestamp ASC
        `},requestsByCountry:{queryType:"logs",sql:e=>`
        -- reports-api-requests-by-country
        select
          cf.country as country,
          count(t.id) as count
        from edge_logs t
          cross join unnest(metadata) as m
          cross join unnest(m.response) as response
          cross join unnest(m.request) as request
          cross join unnest(request.headers) as headers
          cross join unnest(request.cf) as cf
        where
          cf.country is not null
        ${l(e,!1)}
        group by
          cf.country
        `}}},[r.AUTH]:{title:"",queries:{}},[r.STORAGE]:{title:"Storage",queries:{cacheHitRate:{queryType:"logs",sql:e=>`
        -- reports-storage-cache-hit-rate
SELECT
  timestamp_trunc(timestamp, hour) as timestamp,
  countif( h.cf_cache_status in ('HIT', 'STALE', 'REVALIDATED', 'UPDATING') ) as hit_count,
  countif( h.cf_cache_status in ('MISS', 'NONE/UNKNOWN', 'EXPIRED', 'BYPASS', 'DYNAMIC') ) as miss_count
from edge_logs f
  cross join unnest(f.metadata) as m
  cross join unnest(m.request) as r
  cross join unnest(m.response) as res
  cross join unnest(res.headers) as h
where starts_with(r.path, '/storage/v1/object') and r.method = 'GET'
  ${l(e,!1)}
group by timestamp
order by timestamp desc
`},topCacheMisses:{queryType:"logs",sql:e=>`
        -- reports-storage-top-cache-misses
SELECT
  r.path as path,
  r.search as search,
  count(id) as count
from edge_logs f
  cross join unnest(f.metadata) as m
  cross join unnest(m.request) as r
  cross join unnest(m.response) as res
  cross join unnest(res.headers) as h
where starts_with(r.path, '/storage/v1/object')
  and r.method = 'GET'
  and h.cf_cache_status in ('MISS', 'NONE/UNKNOWN', 'EXPIRED', 'BYPASS', 'DYNAMIC')
  ${l(e,!1)}
group by path, search
order by count desc
limit 12
    `}}},[r.QUERY_PERFORMANCE]:{title:"Query performance",queries:{mostFrequentlyInvoked:{queryType:"db",sql:(e,t,s,a=!1,r=!1)=>`
        -- reports-query-performance-most-frequently-invoked
set search_path to public, extensions;

select
    auth.rolname,
    statements.query,
    statements.calls,
    -- -- Postgres 13, 14, 15
    statements.total_exec_time + statements.total_plan_time as total_time,
    statements.min_exec_time + statements.min_plan_time as min_time,
    statements.max_exec_time + statements.max_plan_time as max_time,
    statements.mean_exec_time + statements.mean_plan_time as mean_time,
    -- -- Postgres <= 12
    -- total_time,
    -- min_time,
    -- max_time,
    -- mean_time,
    coalesce(statements.rows::numeric / nullif(statements.calls, 0), 0) as avg_rows,
    statements.rows as rows_read,
    case
      when (statements.shared_blks_hit + statements.shared_blks_read) > 0
      then round(
        (statements.shared_blks_hit * 100.0) /
        (statements.shared_blks_hit + statements.shared_blks_read),
        2
      )
      else 0
    end as cache_hit_rate${a?`,
    case
      when (lower(statements.query) like 'select%' or lower(statements.query) like 'with pgrst%')
      then (
        select json_build_object(
          'has_suggestion', array_length(index_statements, 1) > 0,
          'startup_cost_before', startup_cost_before,
          'startup_cost_after', startup_cost_after,
          'total_cost_before', total_cost_before,
          'total_cost_after', total_cost_after,
          'index_statements', index_statements
        )
        from index_advisor(statements.query)
      )
      else null
    end as index_advisor_result`:""}
  from pg_stat_statements as statements
    inner join pg_authid as auth on statements.userid = auth.oid
  -- skip queries that were never actually executed
  WHERE statements.calls > 0 ${t?t.replace(/^WHERE/,"AND"):""}
  ${s||"order by statements.calls desc"}
  limit 20`},mostTimeConsuming:{queryType:"db",sql:(e,t,s,a=!1,r=!1)=>`
        -- reports-query-performance-most-time-consuming
set search_path to public, extensions;

-- compute total time once up front so we don't need a window function over all rows
with grand_total as (
  select coalesce(nullif(sum(total_exec_time + total_plan_time), 0), 1) as v
  from pg_stat_statements where calls > 0
)
select
    auth.rolname,
    statements.query,
    statements.calls,
    statements.total_exec_time + statements.total_plan_time as total_time,
    statements.mean_exec_time + statements.mean_plan_time as mean_time,
    coalesce(
      ((statements.total_exec_time + statements.total_plan_time) /
        (select v from grand_total)) *
        100,
      0
    ) as prop_total_time${a?`,
    case
      when (lower(statements.query) like 'select%' or lower(statements.query) like 'with pgrst%')
      then (
        select json_build_object(
          'has_suggestion', array_length(index_statements, 1) > 0,
          'startup_cost_before', startup_cost_before,
          'startup_cost_after', startup_cost_after,
          'total_cost_before', total_cost_before,
          'total_cost_after', total_cost_after,
          'index_statements', index_statements
        )
        from index_advisor(statements.query)
      )
      else null
    end as index_advisor_result`:""}
  from pg_stat_statements as statements
    inner join pg_authid as auth on statements.userid = auth.oid
  -- skip queries that were never actually executed
  WHERE statements.calls > 0 ${t?t.replace(/^WHERE/,"AND"):""}
  ${s||"order by total_time desc"}
  limit 20`},slowestExecutionTime:{queryType:"db",sql:(e,t,s,a=!1,r=!1)=>`
        -- reports-query-performance-slowest-execution-time
set search_path to public, extensions;

select
    auth.rolname,
    statements.query,
    statements.calls,
    -- -- Postgres 13, 14, 15
    statements.total_exec_time + statements.total_plan_time as total_time,
    statements.min_exec_time + statements.min_plan_time as min_time,
    statements.max_exec_time + statements.max_plan_time as max_time,
    statements.mean_exec_time + statements.mean_plan_time as mean_time,
    -- -- Postgres <= 12
    -- total_time,
    -- min_time,
    -- max_time,
    -- mean_time,
    coalesce(statements.rows::numeric / nullif(statements.calls, 0), 0) as avg_rows${a?`,
    case
      when (lower(statements.query) like 'select%' or lower(statements.query) like 'with pgrst%')
      then (
        select json_build_object(
          'has_suggestion', array_length(index_statements, 1) > 0,
          'startup_cost_before', startup_cost_before,
          'startup_cost_after', startup_cost_after,
          'total_cost_before', total_cost_before,
          'total_cost_after', total_cost_after,
          'index_statements', index_statements
        )
        from index_advisor(statements.query)
      )
      else null
    end as index_advisor_result`:""}
  from pg_stat_statements as statements
    inner join pg_authid as auth on statements.userid = auth.oid
  -- skip queries that were never actually executed
  WHERE statements.calls > 0 ${t?t.replace(/^WHERE/,"AND"):""}
  ${s||"order by max_time desc"}
  limit 20`},queryHitRate:{queryType:"db",sql:e=>`-- reports-query-performance-cache-and-index-hit-rate
select
    'index hit rate' as name,
    (sum(idx_blks_hit)) / nullif(sum(idx_blks_hit + idx_blks_read),0) as ratio
  from pg_statio_user_indexes
  union all
  select
    'table hit rate' as name,
    sum(heap_blks_hit) / nullif(sum(heap_blks_hit) + sum(heap_blks_read),0) as ratio
  from pg_statio_user_tables;`},unified:{queryType:"db",sql:(e,t,s,a=!1,r=!1,n=1,i=20)=>{let o=(n-1)*i,l=r&&a?o+10*i:o+i,c=a?Math.min(l,500):l;return`
        -- reports-query-performance-unified
        set search_path to public, extensions;

        -- compute total time once up front so we don't need a window function over all rows
        with grand_total as (
          select coalesce(nullif(sum(total_exec_time + total_plan_time), 0), 1) as v
          from pg_stat_statements where calls > 0
        ),
        base as (
          select
            auth.rolname,
            statements.query,
            statements.calls,
            statements.total_exec_time + statements.total_plan_time as total_time,
            statements.min_exec_time + statements.min_plan_time as min_time,
            statements.max_exec_time + statements.max_plan_time as max_time,
            statements.mean_exec_time + statements.mean_plan_time as mean_time,
            coalesce(statements.rows::numeric / nullif(statements.calls, 0), 0) as avg_rows,
            statements.rows as rows_read,
            statements.shared_blks_hit as debug_hit,
            statements.shared_blks_read as debug_read,
            case
              when (statements.shared_blks_hit + statements.shared_blks_read) > 0
              then (statements.shared_blks_hit::numeric * 100.0) /
                   (statements.shared_blks_hit + statements.shared_blks_read)
              else 0
            end as cache_hit_rate,
            coalesce(
              ((statements.total_exec_time + statements.total_plan_time) /
                (select v from grand_total)) *
                100,
              0
            ) as prop_total_time
          from pg_stat_statements as statements
            inner join pg_authid as auth on statements.userid = auth.oid
          -- skip queries that were never actually executed
          WHERE statements.calls > 0 ${t?t.replace(/^WHERE/,"AND"):""}
          ${s||"order by total_time desc"}
          ${null!==c?`limit ${c}`:""}
        ),
        query_results as (
          select
            base.*${a?`,
            case
              when (lower(base.query) like 'select%' or lower(base.query) like 'with pgrst%')
              then (
                select json_build_object(
                  'has_suggestion', array_length(index_statements, 1) > 0,
                  'startup_cost_before', startup_cost_before,
                  'startup_cost_after', startup_cost_after,
                  'total_cost_before', total_cost_before,
                  'total_cost_after', total_cost_after,
                  'index_statements', index_statements
                )
                from index_advisor(base.query)
              )
              else null
            end as index_advisor_result`:""}
          from base
        )
        select *
        from query_results
        ${r&&a?"where (index_advisor_result->>'has_suggestion')::boolean = true":""}
        ${s||"order by total_time desc"}
        limit ${i} offset ${o}`}},slowQueriesCount:{queryType:"db",sql:()=>`
        -- reports-query-performance-slow-queries-count
        set search_path to public, extensions;

        -- Count of slow queries (> 1 second average)
        SELECT count(*) as slow_queries_count
        -- alias needed to reference columns in WHERE
        FROM pg_stat_statements as statements
        -- skip never-executed queries; mean_exec_time > 1000ms = avg over 1 second
        WHERE statements.calls > 0 AND statements.mean_exec_time > 1000;`},queryMetrics:{queryType:"db",sql:(e,t,s,a=!1,r=!1)=>`
        -- reports-query-performance-metrics
        set search_path to public, extensions;

        SELECT
          COALESCE(ROUND(AVG(statements.rows::numeric / NULLIF(statements.calls, 0)), 1), 0) as avg_rows_per_call,
          COUNT(*) FILTER (WHERE statements.total_exec_time + statements.total_plan_time > 1000) as slow_queries,
          COALESCE(
            ROUND(
              SUM(statements.shared_blks_hit) * 100.0 /
              NULLIF(SUM(statements.shared_blks_hit + statements.shared_blks_read), 0),
              2
            ), 0
          ) || '%' as cache_hit_rate
        FROM pg_stat_statements as statements
        -- skip queries that were never actually executed
        WHERE statements.calls > 0 ${t?t.replace(/^WHERE/,"AND"):""}
        ${s||""}`}}},[r.DATABASE]:{title:"database",queries:{largeObjects:{queryType:"db",sql:e=>`-- reports-database-large-objects
SELECT
        SCHEMA_NAME,
        relname,
        table_size
      FROM
        (SELECT
          pg_catalog.pg_namespace.nspname AS SCHEMA_NAME,
          relname,
          pg_total_relation_size(pg_catalog.pg_class.oid) AS table_size
        FROM pg_catalog.pg_class
        JOIN pg_catalog.pg_namespace ON relnamespace = pg_catalog.pg_namespace.oid
        ) t
      WHERE SCHEMA_NAME NOT LIKE 'pg_%'
      ORDER BY table_size DESC
      LIMIT 5;`}}}};e.s(["DEFAULT_QUERY_PARAMS",0,o,"DEPRECATED_REPORTS",0,["total_realtime_ingress","total_rest_options_requests","total_auth_ingress","total_auth_get_requests","total_auth_post_requests","total_auth_patch_requests","total_auth_options_requests","total_storage_options_requests","total_storage_patch_requests","total_options_requests","total_rest_ingress","total_rest_get_requests","total_rest_post_requests","total_rest_patch_requests","total_rest_delete_requests","total_storage_get_requests","total_storage_post_requests","total_storage_delete_requests","total_auth_delete_requests","total_get_requests","total_patch_requests","total_post_requests","total_ingress","total_delete_requests"],"EDGE_FUNCTION_REGIONS",0,[{key:"ap-northeast-1",label:"Tokyo"},{key:"ap-northeast-2",label:"Seoul"},{key:"ap-south-1",label:"Mumbai"},{key:"ap-southeast-1",label:"Singapore"},{key:"ap-southeast-2",label:"Sydney"},{key:"ca-central-1",label:"Canada Central"},{key:"us-east-1",label:"N. Virginia"},{key:"us-west-1",label:"N. California"},{key:"us-west-2",label:"Oregon"},{key:"eu-central-1",label:"Frankfurt"},{key:"eu-west-1",label:"Ireland"},{key:"eu-west-2",label:"London"},{key:"eu-west-3",label:"Paris"},{key:"sa-east-1",label:"São Paulo"}],"LAYOUT_COLUMN_COUNT",0,2,"PRESET_CONFIG",0,c,"REPORTS_DATEPICKER_HELPERS",0,i,"REPORT_DATERANGE_HELPER_LABELS",()=>n,"generateRegexpWhere",0,l],820308)},384429,e=>{"use strict";var t=e.i(698175);e.s(["Select",()=>t.default])},870152,e=>{"use strict";var t=e.i(532480);e.s(["InfoIcon",()=>t.default])},241603,990275,e=>{"use strict";var t=e.i(726359);e.s(["zoom",()=>t.default],241603);var s=e.i(249355);e.s(["zoomIdentity",()=>s.identity],990275)},722738,861439,e=>{"use strict";var t=e.i(388019);let s=(0,t.default)("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);e.s(["DiamondIcon",()=>s],722738);let a=(0,t.default)("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);e.s(["Fingerprint",()=>a],861439)},672296,e=>{"use strict";function t(e){return e.split("#")[0]}function s(e,t={}){let{maxDepth:a=3,redaction:r="[REDACTED]",truncationNotice:n="[REDACTED: max depth reached]",sensitiveKeys:i=[]}=t,o=new Set(["password","passwd","pwd","pass","secret","token","id_token","access_token","refresh_token","apikey","api_key","api-key","apiKey","key","privatekey","private_key","client_secret","clientSecret","auth","authorization","ssh_key","sshKey","bearer","session","cookie","csrf","xsrf","ip","ip_address","ipAddress","aws_access_key_id","aws_secret_access_key","gcp_service_account_key",...i].map(e=>e.toLowerCase())),l=[{re:/\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g,reason:"ip"},{re:/\b(?:[A-Fa-f0-9]{1,4}:){2,7}[A-Fa-f0-9]{1,4}\b/g,reason:"ip6"},{re:/\b(AKI|ASI)A[0-9A-Z]{16}\b/g,reason:"aws_access_key_id"},{re:/\b[0-9A-Za-z/+]{40}\b/g,reason:"aws_secret_access_key_like"},{re:/\bBearer\s+[A-Za-z0-9\-._~+/]+=*\b/g,reason:"bearer"},{re:/\b[A-Za-z0-9-_]+?\.[A-Za-z0-9-_]+?\.[A-Za-z0-9-_]+?\b/g,reason:"jwt_like"},{re:/\b[A-Za-z0-9_\-]{24,64}\b/g,reason:"long_token"}],c=new WeakMap;function u(e){let t=e;for(let{re:e}of l)t=t.replace(e,r);return t}function d(e){return o.has(String(e).toLowerCase())}return e.map(e=>(function e(t,s){if(null==t||"number"==typeof t||"boolean"==typeof t||"bigint"==typeof t)return t;if("string"==typeof t)return u(t);if("function"==typeof t)return"[Function]";if(t instanceof Date)return t.toISOString();if(t instanceof RegExp)return t.toString();if(ArrayBuffer.isView(t)&&!(t instanceof DataView))return`[TypedArray byteLength=${t.byteLength}]`;if(t instanceof ArrayBuffer)return`[ArrayBuffer byteLength=${t.byteLength}]`;if(s>=a)return n;if("object"==typeof t){if(c.has(t))return"[Circular]";if(Array.isArray(t)){let a=[];c.set(t,a);for(let r=0;r<t.length;r++)a[r]=e(t[r],s+1);return a}if(function(e){if(null===e||"object"!=typeof e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}(t)){let a={};for(let[n,i]of(c.set(t,a),Object.entries(t)))d(n)?a[n]=r:a[n]=e(i,s+1);return a}if(t instanceof Map){let a=[];for(let[n,i]of(c.set(t,a),t.entries())){let t=d(n)?r:e(n,s+1),o=d(n)?r:e(i,s+1);a.push([t,o])}return a}if(t instanceof Set){let a=[];for(let r of(c.set(t,a),t.values()))a.push(e(r,s+1));return a}if(t instanceof URL)return t.toString();if(t instanceof Error){let e={name:t.name,message:u(t.message),stack:n};return c.set(t,e),e}try{return u(String(t))}catch{return u(Object.prototype.toString.call(t))}}return u(String(t))})(e,0))}e.s(["sanitizeArrayOfObjects",()=>s,"sanitizeUrlHashParams",()=>t])},29750,(e,t,s)=>{"use strict";var a="function"==typeof Symbol&&Symbol.for,r=a?Symbol.for("react.element"):60103,n=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,o=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,c=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,m=a?Symbol.for("react.concurrent_mode"):60111,h=a?Symbol.for("react.forward_ref"):60112,p=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.suspense_list"):60120,_=a?Symbol.for("react.memo"):60115,g=a?Symbol.for("react.lazy"):60116,b=a?Symbol.for("react.block"):60121,x=a?Symbol.for("react.fundamental"):60117,y=a?Symbol.for("react.responder"):60118,j=a?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case m:case i:case l:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case h:case g:case _:case c:return e;default:return t}}case n:return t}}}function k(e){return v(e)===m}s.AsyncMode=d,s.ConcurrentMode=m,s.ContextConsumer=u,s.ContextProvider=c,s.Element=r,s.ForwardRef=h,s.Fragment=i,s.Lazy=g,s.Memo=_,s.Portal=n,s.Profiler=l,s.StrictMode=o,s.Suspense=p,s.isAsyncMode=function(e){return k(e)||v(e)===d},s.isConcurrentMode=k,s.isContextConsumer=function(e){return v(e)===u},s.isContextProvider=function(e){return v(e)===c},s.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},s.isForwardRef=function(e){return v(e)===h},s.isFragment=function(e){return v(e)===i},s.isLazy=function(e){return v(e)===g},s.isMemo=function(e){return v(e)===_},s.isPortal=function(e){return v(e)===n},s.isProfiler=function(e){return v(e)===l},s.isStrictMode=function(e){return v(e)===o},s.isSuspense=function(e){return v(e)===p},s.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===m||e===l||e===o||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===_||e.$$typeof===c||e.$$typeof===u||e.$$typeof===h||e.$$typeof===x||e.$$typeof===y||e.$$typeof===j||e.$$typeof===b)},s.typeOf=v},213784,(e,t,s)=>{"use strict";t.exports=e.r(29750)},781979,(e,t,s)=>{"use strict";var a=e.r(213784),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return a.isMemo(e)?i:o[e.$$typeof]||r}o[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[a.Memo]=i;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;t.exports=function e(t,s,a){if("string"!=typeof s){if(p){var r=h(s);r&&r!==p&&e(t,r,a)}var i=u(s);d&&(i=i.concat(d(s)));for(var o=l(t),f=l(s),_=0;_<i.length;++_){var g=i[_];if(!n[g]&&!(a&&a[g])&&!(f&&f[g])&&!(o&&o[g])){var b=m(s,g);try{c(t,g,b)}catch(e){}}}}return t}},282672,996941,835453,805279,528921,e=>{"use strict";let t="u"<typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;e.s(["DEBUG_BUILD",()=>t],282672);var s=e.i(469449);function a(e){let t={};try{e.forEach((e,s)=>{"string"==typeof e&&(t[s]=e)})}catch{}return t}function r(e){let t=Object.create(null);try{Object.entries(e).forEach(([e,s])=>{"string"==typeof s&&(t[e]=s)})}catch{}return t}function n(e){let t=a(e.headers);return{method:e.method,url:e.url,query_string:o(e.url),headers:t}}function i(e){let t=e.headers||{},s=("string"==typeof t["x-forwarded-host"]?t["x-forwarded-host"]:void 0)||("string"==typeof t.host?t.host:void 0),a=("string"==typeof t["x-forwarded-proto"]?t["x-forwarded-proto"]:void 0)||e.protocol||(e.socket?.encrypted?"https":"http"),n=e.url||"",i=function({url:e,protocol:t,host:s}){return e?.startsWith("http")?e:e&&s?`${t}://${s}${e}`:void 0}({url:n,host:s,protocol:a}),l=e.body||void 0,c=e.cookies;return{url:i,method:e.method,query_string:o(n),headers:r(t),cookies:c,data:l}}function o(e){if(e)try{let t=new URL(e,"http://s.io").search.slice(1);return t.length?t:void 0}catch{return}}e.s(["headersToDict",()=>r,"httpRequestToRequestData",()=>i,"winterCGHeadersToDict",()=>a,"winterCGRequestToRequestData",()=>n],996941);var l=e.i(817729),c=e.i(40108);function u(e){let t=c.GLOBAL_OBJ[Symbol.for("@vercel/request-context")],s=t?.get?.();s?.waitUntil&&s.waitUntil(e)}e.s(["vercelWaitUntil",()=>u],835453);var d=e.i(521852);async function m(){try{t&&d.debug.log("Flushing events..."),await (0,l.flush)(2e3),t&&d.debug.log("Done flushing events")}catch(e){t&&d.debug.log("Error while flushing events:\n",e)}}async function h(e){let{req:t,res:a,err:r}=e,n=a?.statusCode||e.statusCode;if(n&&n<500||!e.pathname)return Promise.resolve();(0,s.withScope)(e=>{if(t){let s=i(t);e.setSDKProcessingMetadata({normalizedRequest:s})}(0,l.captureException)(r||`_error.js called with falsy error (${r})`,{mechanism:{type:"auto.function.nextjs.underscore_error",handled:!1,data:{function:"_error.getInitialProps"}}})}),u(m())}e.s(["flushSafelyWithTimeout",()=>m],805279),e.s(["captureUnderscoreErrorException",()=>h],528921)},113478,e=>{"use strict";var t=e.i(478902),s=e.i(875102),a=e.i(934302),r=e.i(217561),n=e.i(370410),i=e.i(816467),o=e.i(786741),l=e.i(774803),c=e.i(544197),u=e.i(896975),d=e.i(462813),m=e.i(389959);e.i(128328);var h=e.i(947748),p=e.i(158639),f=e.i(355901),_=e.i(837710),g=e.i(375761),b=e.i(874311),x=e.i(710483),y=e.i(565066),j=e.i(455915),v=e.i(3036),k=e.i(710377),S=e.i(587433),w=e.i(843778),E=e.i(983783),N=e.i(804222);let P=({id:e,animated:a,data:r,deletable:n,selectable:i,source:o,sourceX:l,sourceY:c,sourceHandleId:u,sourcePosition:d=j.Position.Bottom,target:m,targetX:h,targetY:p,targetHandleId:f,targetPosition:_=j.Position.Top,selected:g,pathOptions:b,...x})=>{let[y,v,k]=(0,j.getSmoothStepPath)({sourceX:l,sourceY:c,targetX:h,targetY:p,sourcePosition:d,targetPosition:_,borderRadius:b?.borderRadius,offset:b?.offset,stepPosition:b?.stepPosition});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.BaseEdge,{id:e,path:y,className:(0,w.cn)(g?"!stroke-brand":void 0),...x}),r&&g?(0,t.jsx)(C,{source:o,target:m,edgePath:y,labelX:v,labelY:k,sourceX:l,targetX:h,data:r}):null]})},C=({data:e,edgePath:a,source:r,target:n,labelX:i,labelY:o,targetX:l,sourceX:c})=>{let[u,d]=(0,m.useState)(!1),h=(0,s.useReactFlow)(),p=(0,N.useStaticEffectEvent)(e=>{if(!e)return;let t=h.getNode(r),s=h.getNode(n);if(!t||!s)return;let a=e.getBoundingClientRect(),i=h.screenToFlowPosition({x:a.x,y:a.y}),o=h.screenToFlowPosition({x:a.x+a.width,y:a.y+a.height}),l={x:i.x,y:i.y,width:o.x-i.x,height:o.y-i.y},c=h.isNodeIntersecting(t,l),u=h.isNodeIntersecting(s,l);d(!c&&!u)});return(0,t.jsx)(s.EdgeLabelRenderer,{children:(0,t.jsx)(S.Badge,{ref:p,className:(0,w.cn)("absolute pointer-events-auto z-50 p-1 rounded-[4px] gap-1 outline outline-1 outline-brand",u?"opacity-100":"opacity-0"),style:{transform:`translate(-50%, -50%) translate(${i}px, ${o}px)`},children:c<l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A,{schema:e.sourceSchemaName,table:e.sourceName,column:e.sourceColumnName}),(0,t.jsx)(k.ArrowRight,{size:12}),(0,t.jsx)(A,{schema:e.targetSchemaName,table:e.targetName,column:e.targetColumnName})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A,{schema:e.targetSchemaName,table:e.targetName,column:e.targetColumnName}),(0,t.jsx)(v.ArrowLeft,{size:12}),(0,t.jsx)(A,{schema:e.sourceSchemaName,table:e.sourceName,column:e.sourceColumnName})]})})})},A=({schema:e,table:s,column:a})=>{let{selectedSchema:r}=(0,E.useQuerySchemaState)();return(0,t.jsxs)(S.Badge,{className:"normal-case text-[8px]",children:[r===e?"":`${e}.`,s,".",a]})},T=(0,m.createContext)(null),q=({children:e,value:s})=>(0,t.jsx)(T.Provider,{value:s,children:e});var R=e.i(722738),I=e.i(861439),D=e.i(116746),O=e.i(546024);let $=()=>(0,t.jsx)("div",{className:"absolute bottom-0 left-0 border-t flex justify-center px-1 py-2 shadow-md bg-surface-100 w-full z-10",children:(0,t.jsxs)("ul",{className:"flex flex-wrap  items-center justify-center gap-4",children:[(0,t.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,t.jsx)(O.Key,{size:15,strokeWidth:1.5,className:"flex-shrink-0 text-light"}),"Primary key"]}),(0,t.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,t.jsx)(D.Hash,{size:15,strokeWidth:1.5,className:"flex-shrink-0 text-light"}),"Identity"]}),(0,t.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,t.jsx)(I.Fingerprint,{size:15,strokeWidth:1.5,className:"flex-shrink-0 text-light"}),"Unique"]}),(0,t.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,t.jsx)(R.DiamondIcon,{size:15,strokeWidth:1.5,className:"flex-shrink-0 text-light"}),"Nullable"]}),(0,t.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,t.jsx)(R.DiamondIcon,{size:15,strokeWidth:1.5,fill:"currentColor",className:"flex-shrink-0 text-light"}),"Non-Nullable"]})]})});var L=e.i(971104),M=e.i(539256);e.i(481541);var F=e.i(71981),z=e.i(53071),B=e.i(870152),U=e.i(471998),W=e.i(219195),H=e.i(711339),Q=e.i(613580),G=e.i(19583),Y=e.i(2579),K=e.i(635494);let V=({id:e,data:r,targetPosition:n,sourcePosition:o,placeholder:l})=>{let c="!h-px !w-px !min-w-0 !min-h-0 !cursor-grab !border-0 !opacity-0",u=(()=>{let e=(0,m.useContext)(T);if(!e)throw Error("useSchemaGraphContext must be used inside a <SchemaGraphContextProvider>");return e})(),{data:d}=(0,K.useSelectedProjectQuery)(),{can:h}=(0,Y.useAsyncCheckPermissions)(a.PermissionAction.TENANT_SQL_ADMIN_WRITE,"columns"),p=(0,H.useRouter)(),f="h-[22px]",x=u.selectedEdge?.source===e||u.selectedEdge?.target===e;return(0,t.jsx)("article",{children:r.isForeign?(0,t.jsxs)("header",{className:(0,w.cn)("text-[0.55rem] px-2 py-1 border-[0.5px] rounded-[4px] bg-alternative flex gap-1 items-center",x?"outline outline-1 outline-brand":void 0),children:[r.name,n&&(0,t.jsx)(s.Handle,{type:"target",id:r.name,position:n,className:(0,w.cn)(c)})]}):(0,t.jsxs)("div",{className:(0,w.cn)("border-[0.5px] overflow-hidden rounded-[4px] shadow-sm",x?"outline outline-1 outline-brand":void 0),style:{width:160},children:[(0,t.jsxs)("header",{className:(0,w.cn)("text-[0.55rem] pl-2 pr-1 bg-alternative flex gap-2 items-center justify-between",f),children:[(0,t.jsxs)("div",{className:"min-w-0 flex flex-shrink gap-x-1 items-center",children:[(0,t.jsx)(W.Table2,{strokeWidth:1,size:12,className:"text-light"}),(0,t.jsx)("span",{className:"whitespace-nowrap overflow-hidden text-ellipsis",title:r.name,children:r.name})]}),u.isDownloading?null:(0,t.jsxs)("div",{className:"flex flex-shrink-0 items-center gap-2",children:[r.description&&(0,t.jsxs)(Q.Tooltip,{children:[(0,t.jsx)(Q.TooltipTrigger,{asChild:!0,className:"cursor-default ",children:(0,t.jsx)(B.InfoIcon,{size:10,className:"text-light"})}),(0,t.jsx)(Q.TooltipContent,{side:"top",children:r.description})]}),!l&&(0,t.jsxs)(b.DropdownMenu,{children:[(0,t.jsx)(b.DropdownMenuTrigger,{asChild:!0,children:(0,t.jsxs)(_.Button,{type:"text",className:"px-0 w-[16px] h-[16px] rounded nodrag nopan",children:[(0,t.jsx)(U.MoreVertical,{size:10}),(0,t.jsxs)("span",{className:"sr-only",children:[r.name," actions"]})]})}),(0,t.jsxs)(b.DropdownMenuContent,{side:"bottom",align:"end",className:"w-40",children:[(0,t.jsxs)(b.DropdownMenuItem,{className:"flex items-center space-x-2 whitespace-nowrap",onClick:()=>u.onEditTable(r.id),children:[(0,t.jsx)(z.Edit,{size:12}),(0,t.jsx)("p",{children:"Edit table"})]}),(0,t.jsxs)(b.DropdownMenuItem,{className:"flex items-center space-x-2 whitespace-nowrap",onClick:e=>{e.stopPropagation(),(0,g.copyToClipboard)(r.name)},children:[(0,t.jsx)(i.Copy,{size:12}),(0,t.jsx)("span",{children:"Copy name"})]}),(0,t.jsxs)(b.DropdownMenuItem,{className:"flex items-center space-x-2 whitespace-nowrap",onClick:()=>p.push((0,G.buildTableEditorUrl)({projectRef:d?.ref,tableId:r.id,schema:r.schema})),children:[(0,t.jsx)(F.TableEditor,{size:12}),(0,t.jsx)("p",{children:"View in Table Editor"})]})]})]})]})]}),r.columns.map(e=>(0,t.jsxs)("div",{className:(0,w.cn)("text-[8px] leading-5 relative flex flex-row justify-items-start","bg-surface-100","border-t","border-t-[0.5px]","hover:bg-scale-500 transition cursor-default","group","pr-1",f),"data-testid":`${r.name}/${e.name}`,children:[(0,t.jsxs)("div",{className:(0,w.cn)("gap-[0.24rem] flex mx-2 align-middle items-center justify-start",e.isPrimary&&"basis-1/5"),children:[e.isPrimary&&(0,t.jsx)(O.Key,{size:8,strokeWidth:1,className:(0,w.cn)("flex-shrink-0","text-light")}),e.isNullable&&(0,t.jsx)(R.DiamondIcon,{size:8,strokeWidth:1,className:"flex-shrink-0 text-light"}),!e.isNullable&&(0,t.jsx)(R.DiamondIcon,{size:8,strokeWidth:1,fill:"currentColor",className:"flex-shrink-0 text-light"}),e.isUnique&&(0,t.jsx)(I.Fingerprint,{size:8,strokeWidth:1,className:"flex-shrink-0 text-light"}),e.isIdentity&&(0,t.jsx)(D.Hash,{size:8,strokeWidth:1,className:"flex-shrink-0 text-light"})]}),(0,t.jsxs)("div",{className:"flex w-full justify-between min-w-0",children:[(0,t.jsx)("span",{className:(0,w.cn)("text-ellipsis overflow-hidden whitespace-nowrap min-w-0 max-w-[80%]",u.selectedEdge?.sourceHandle===e.id||u.selectedEdge?.targetHandle===e.id?"text-brand":void 0),title:e.name,children:e.name}),(0,t.jsx)("span",{className:"flex-shrink-0 pl-2 pr-1 inline-flex justify-end font-mono text-lighter text-[0.4rem] group-hover:hidden",children:e.format})]}),n&&(0,t.jsx)(s.Handle,{type:"target",id:e.id,position:n,className:(0,w.cn)(c)}),o&&(0,t.jsx)(s.Handle,{type:"source",id:e.id,position:o,className:(0,w.cn)(c)}),(0,t.jsxs)(b.DropdownMenu,{children:[(0,t.jsx)(b.DropdownMenuTrigger,{asChild:!0,children:(0,t.jsxs)(_.Button,{type:"text",className:"opacity-0 focus:opacity-100 group-hover:opacity-100 data-[state=open]:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 px-0 mr-1 w-[16px] h-[16px] rounded",children:[(0,t.jsx)(U.MoreVertical,{size:10}),(0,t.jsxs)("span",{className:"sr-only",children:[r.name," ",e.name," actions"]})]})}),(0,t.jsxs)(b.DropdownMenuContent,{side:"bottom",align:"end",className:"w-32",children:[(0,t.jsxs)(Q.Tooltip,{children:[(0,t.jsx)(Q.TooltipTrigger,{asChild:!0,children:(0,t.jsxs)(b.DropdownMenuItem,{disabled:!h,onClick:()=>u.onEditColumn(r.id,e.id),className:"space-x-2",children:[(0,t.jsx)(z.Edit,{size:12}),(0,t.jsx)("p",{children:"Edit column"})]})}),!h&&(0,t.jsx)(Q.TooltipContent,{side:"bottom",children:"Additional permissions required to edit column"})]}),(0,t.jsxs)(b.DropdownMenuItem,{className:"space-x-2",onClick:t=>{t.stopPropagation(),(0,g.copyToClipboard)(e.name)},children:[(0,t.jsx)(i.Copy,{size:12}),(0,t.jsx)("span",{children:"Copy name"})]})]})]})]},e.id))]})})};var Z=e.i(48189);async function X(e,t,s){if(!s?.length)return{nodes:[],edges:[]};let a=s.map(t=>{let s=(t.columns||[]).map(e=>({id:e.id,isPrimary:t.primary_keys.some(t=>t.name===e.name),name:e.name,format:e.format,isNullable:e.is_nullable,isUnique:e.is_unique,isUpdateable:e.is_updatable,isIdentity:e.is_identity}));return{data:{ref:e,id:t.id,name:t.name,description:t.comment??"",schema:t.schema,isForeign:!1,columns:s},id:`${t.id}`,type:"table",position:{x:0,y:0}}}),r=[],n=s[0].schema;for(let t of(0,M.default)(s.flatMap(e=>e.relationships),"id")){if(t.source_schema!==n)continue;if(t.target_table_schema!==n){let n=`${t.target_table_schema}.${t.target_table_name}.${t.target_column_name}`;if(!a.find(e=>e.id===n)){let s={id:t.id,ref:e,schema:t.target_table_schema,name:n,description:"",isForeign:!0,columns:[]};a.push({id:n,type:"table",data:s,position:{x:0,y:0}})}let[i,o]=J(s,t.source_table_name,t.source_column_name);i&&r.push({id:String(t.id),source:i,sourceHandle:o,target:n,targetHandle:n,deletable:!1,data:{sourceName:t.source_table_name,sourceSchemaName:t.source_schema,sourceColumnName:t.source_column_name,targetName:t.target_table_name,targetSchemaName:t.target_table_schema,targetColumnName:t.target_column_name}});continue}let[i,o]=J(s,t.source_table_name,t.source_column_name),[l,c]=J(s,t.target_table_name,t.target_column_name);i&&l&&r.push({id:String(t.id),source:i,sourceHandle:o,target:l,targetHandle:c,type:"default",data:{sourceName:t.source_table_name,sourceSchemaName:t.source_schema,sourceColumnName:t.source_column_name,targetName:t.target_table_name,targetSchemaName:t.target_table_schema,targetColumnName:t.target_column_name}})}let i=localStorage.getItem(h.LOCAL_STORAGE_KEYS.SCHEMA_VISUALIZER_POSITIONS(e??"project",t?.id??0)),o=(0,Z.tryParseJson)(i);return o?et(a,r,o):ee(a,r)}function J(e,t,s){for(let a of e)if(t===a.name){for(let e of a.columns||[])if(s===e.name)return[String(a.id),e.id]}return[]}let ee=(e,t)=>{let s=new L.default.graphlib.Graph;return s.setDefaultEdgeLabel(()=>({})),s.setGraph({rankdir:"LR",align:"UR",nodesep:25,ranksep:50}),e.forEach(e=>{s.setNode(e.id,{width:160,height:20*(e.data.columns.length+1)})}),t.forEach(e=>{s.setEdge(e.source,e.target)}),L.default.layout(s),e.forEach(e=>{let t=s.node(e.id);return e.targetPosition=j.Position.Left,e.sourcePosition=j.Position.Right,e.position={x:t.x-t.width/2,y:t.y-t.height/2},e}),{nodes:e,edges:t}},et=(e,t,s)=>{let a=e.filter(e=>!(e.id in s)),r=0,n={x:0,y:-(65+10*a.length)};return e.forEach(e=>{let t=s?.[e.id];e.targetPosition=j.Position.Left,e.sourcePosition=j.Position.Right,t?e.position=t:(e.position={x:n.x+10*r,y:n.y+10*r},r+=1)}),{nodes:e,edges:t}};var es=e.i(567558),ea=e.i(215312),er=e.i(300424),en=e.i(801834),ei=e.i(738196),eo=e.i(124416),el=e.i(392491),ec=e.i(636047);let eu=()=>{let{ref:e}=(0,p.useParams)(),{resolvedTheme:j}=(0,u.useTheme)(),{data:v}=(0,K.useSelectedProjectQuery)(),{selectedSchema:k,setSelectedSchema:S}=(0,E.useQuerySchemaState)(),[w,C]=(0,m.useState)(null),A=(0,ec.useTableEditorStateSnapshot)(),[T,R]=(0,m.useState)(!1);(0,m.useEffect)(()=>{T&&setTimeout(()=>R(!1),2e3)},[T]);let[I,D]=(0,m.useState)(!1),O=j?.includes("dark")?"rgb(17, 19, 24, .8)":"rgb(237, 237, 237, .8)",L=(0,s.useReactFlow)(),M=(0,m.useMemo)(()=>({table:V}),[]),F=(0,m.useMemo)(()=>({default:P}),[]),{data:z,error:B,isSuccess:U,isPending:W,isError:H}=(0,en.useSchemasQuery)({projectRef:v?.ref,connectionString:v?.connectionString}),{data:Q=[],error:G,isSuccess:J,isPending:et,isError:eu}=(0,ei.useTablesQuery)({projectRef:v?.ref,connectionString:v?.connectionString,schema:k,includeColumns:!0}),ed=U&&0===Q.length,em=(z??[]).find(e=>e.name===k),[,eh]=(0,eo.useLocalStorage)(h.LOCAL_STORAGE_KEYS.SCHEMA_VISUALIZER_POSITIONS(e,em?.id??0),{}),{can:ep}=(0,Y.useAsyncCheckPermissions)(a.PermissionAction.TENANT_SQL_ADMIN_WRITE,"tables"),{isSchemaLocked:ef}=(0,el.useIsProtectedSchema)({schema:k}),e_=(0,N.useStaticEffectEvent)(()=>{if(void 0===em)return console.error("Schema is required");let e=L.getNodes();e.length>0&&eh(e.reduce((e,t)=>({...e,[t.id]:t.position}),{}))}),[eg,eb]=(0,m.useState)(void 0),ex=(0,N.useStaticEffectEvent)(e=>{1===e.edges.length?eb(e.edges[0]):eb(void 0)}),ey=t=>{let s=document.querySelector(".react-flow__viewport");if(!s)return;D(!0);let a=s.clientWidth,n=s.clientHeight,{x:i,y:o,zoom:l}=L.getViewport();"svg"===t?(0,r.toSvg)(s,{backgroundColor:"white",width:a,height:n,style:{width:a.toString(),height:n.toString(),transform:`translate(${i}px, ${o}px) scale(${l})`}}).then(t=>{let s=document.createElement("a");s.setAttribute("download",`supabase-schema-${e}.svg`),s.setAttribute("href",t),s.click(),f.toast.success("Successfully downloaded as SVG")}).catch(e=>{console.error("Failed to download:",e),f.toast.error("Failed to download current view:",e.message)}).finally(()=>{D(!1)}):"png"===t&&(0,r.toPng)(s,{backgroundColor:"white",width:a,height:n,style:{width:a.toString(),height:n.toString(),transform:`translate(${i}px, ${o}px) scale(${l})`}}).then(t=>{let s=document.createElement("a");s.setAttribute("download",`supabase-schema-${e}.png`),s.setAttribute("href",t),s.click(),f.toast.success("Successfully downloaded as PNG")}).catch(e=>{console.error("Failed to download:",e),f.toast.error("Failed to download current view:",e.message)}).finally(()=>{D(!1)})},ej=(0,m.useRef)(!0);(0,m.useEffect)(()=>{J&&U&&Q.length>0&&X(e,z.find(e=>e.name===k),Q).then(({nodes:e,edges:t})=>{L.setNodes(e),L.setEdges(t),ej.current&&(ej.current=!1,setTimeout(()=>L.fitView({})))})},[J,U,Q,L,e,j,z,k]);let ev=(0,m.useMemo)(()=>({selectedEdge:eg,isDownloading:I,onEditColumn:(e,t)=>{let s=Q.find(t=>t.id===e);if(!s||null==s.columns)return;let a=s.columns.find(e=>e.id===t);a&&(C(s),A.onEditColumn(a))},onEditTable:e=>{let t=Q.find(t=>t.id===e);t&&null!=t.columns&&(C(t),A.onEditTable())}}),[Q,A,I,eg]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-muted h-[var(--header-height)]",children:[W&&(0,t.jsx)("div",{className:"h-[34px] w-[260px] bg-foreground-lighter rounded shimmering-loader"}),H&&(0,t.jsx)(es.default,{error:B,subject:"Failed to retrieve schemas"}),U&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(er.default,{className:"w-[180px]",size:"tiny",showError:!1,selectedSchemaName:k,onSelectSchema:S}),!ed&&(0,t.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,t.jsx)(ea.ButtonTooltip,{type:"outline",icon:T?(0,t.jsx)(n.Check,{"data-testid":"copy-sql-ready"}):(0,t.jsx)(i.Copy,{}),onClick:()=>{Q&&((0,g.copyToClipboard)((0,Z.tablesToSQL)(Q)),R(!0))},tooltip:{content:{side:"bottom",text:(0,t.jsxs)("div",{className:"max-w-[180px] space-y-2 text-foreground-light",children:[(0,t.jsx)("p",{className:"text-foreground",children:"Note"}),(0,t.jsx)("p",{children:"This schema is for context or debugging only. Table order and constraints may be invalid. Not meant to be run as-is."})]})}},children:"Copy as SQL"}),(0,t.jsxs)(b.DropdownMenu,{children:[(0,t.jsx)(b.DropdownMenuTrigger,{asChild:!0,children:(0,t.jsx)(ea.ButtonTooltip,{"aria-label":"Download Schema",type:"default",loading:I,className:"px-1.5",icon:(0,t.jsx)(o.Download,{}),tooltip:{content:{side:"bottom",text:"Download current view"}}})}),(0,t.jsxs)(b.DropdownMenuContent,{className:"w-32",children:[(0,t.jsx)(b.DropdownMenuItem,{onClick:()=>ey("png"),children:"Download as PNG"}),(0,t.jsx)(b.DropdownMenuItem,{onClick:()=>ey("svg"),children:"Download as SVG"})]})]}),(0,t.jsx)(ea.ButtonTooltip,{type:"default",onClick:()=>{let e=L.getNodes(),t=L.getEdges();ee(e.filter(e=>"table"===e.type),t),L.setNodes(e),L.setEdges(t),setTimeout(()=>L.fitView({})),e_()},tooltip:{content:{side:"bottom",text:"Automatically arrange the layout of all nodes"}},children:"Auto layout"})]})]})]}),et&&(0,t.jsxs)("div",{className:"w-full h-full flex items-center justify-center gap-x-2",children:[(0,t.jsx)(l.Loader2,{className:"animate-spin text-foreground-light",size:16}),(0,t.jsx)("p",{className:"text-sm text-foreground-light",children:"Loading tables"})]}),eu&&(0,t.jsx)("div",{className:"w-full h-full flex items-center justify-center px-20",children:(0,t.jsx)(es.default,{subject:"Failed to retrieve tables",error:G})}),J&&(0,t.jsx)(t.Fragment,{children:ed?(0,t.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:(0,t.jsx)(x.Admonition,{type:"default",className:"max-w-md",title:"No tables in schema",description:ef?`The “${k}” schema is managed by Supabase and is read-only through
                    the dashboard.`:ep?`The “${k}” schema doesn’t have any tables.`:"You need additional permissions to create tables",children:ep&&!ef&&(0,t.jsx)(_.Button,{asChild:!0,className:"mt-2",type:"default",icon:(0,t.jsx)(c.Plus,{}),children:(0,t.jsx)(d.default,{href:`/project/${e}/editor?create=table`,children:"New table"})})})}):(0,t.jsx)(q,{value:ev,children:(0,t.jsx)("div",{className:"w-full h-full",children:(0,t.jsxs)(s.ReactFlow,{colorMode:"",defaultNodes:[],defaultEdges:[],defaultEdgeOptions:{type:"default",animated:!0,deletable:!1},nodeTypes:M,edgeTypes:F,fitView:!0,minZoom:.8,maxZoom:1.8,proOptions:{hideAttribution:!0},onNodeDragStop:e_,onSelectionChange:ex,children:[(0,t.jsx)(s.Background,{gap:16,className:"[&>*]:stroke-foreground-muted opacity-[25%]",variant:s.BackgroundVariant.Dots,color:"inherit"}),(0,t.jsx)(s.MiniMap,{pannable:!0,zoomable:!0,nodeColor:"#111318",maskColor:O,className:"border rounded-md shadow-sm"}),(0,t.jsx)($,{})]})})})}),(0,t.jsx)(y.SidePanelEditor,{selectedTable:w??void 0,includeColumns:!0})]})};var ed=e.i(812136),em=e.i(448710);let eh=()=>(0,t.jsx)("div",{className:"flex w-full h-full flex-col",children:(0,t.jsx)(s.ReactFlowProvider,{children:(0,t.jsx)(eu,{})})});eh.getLayout=e=>(0,t.jsx)(em.default,{children:(0,t.jsx)(ed.default,{title:"Schema Visualizer",children:e})}),e.s(["default",0,eh],113478)},382093,(e,t,s)=>{let a="/project/[ref]/database/schemas";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(113478)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},111410,e=>{e.v(t=>Promise.all(["static/chunks/a428d2b7e6671266.js","static/chunks/db6e89e400789b2b.js"].map(t=>e.l(t))).then(()=>t(677146)))},883471,e=>{e.v(t=>Promise.all(["static/chunks/f2ab36b4c62edcb1.js"].map(t=>e.l(t))).then(()=>t(518769)))},295343,e=>{e.v(t=>Promise.all(["static/chunks/2dcd75b489b8110b.js"].map(t=>e.l(t))).then(()=>t(401405)))},417162,e=>{e.v(t=>Promise.all(["static/chunks/a3a0a577864eb397.js"].map(t=>e.l(t))).then(()=>t(472739)))},25642,e=>{e.v(t=>Promise.all(["static/chunks/33a901fd558d667e.js","static/chunks/a2c1107070f1b997.js","static/chunks/d51566ea9e41571e.js","static/chunks/d8dbe5d60074dc0c.js"].map(t=>e.l(t))).then(()=>t(207831)))},561602,e=>{e.v(t=>Promise.all(["static/chunks/2265846d03db3dc0.js","static/chunks/0038fad038cedf06.js","static/chunks/a2c1107070f1b997.js"].map(t=>e.l(t))).then(()=>t(326204)))},877114,e=>{e.v(e=>Promise.resolve().then(()=>e(812136)))},540007,e=>{e.v(t=>Promise.all(["static/chunks/a96594a5232407af.js"].map(t=>e.l(t))).then(()=>t(785951)))},593029,e=>{e.v(t=>Promise.all(["static/chunks/677870489e8bb17d.js"].map(t=>e.l(t))).then(()=>t(755497)))},849654,e=>{e.v(t=>Promise.all(["static/chunks/188811f3d08c7107.js"].map(t=>e.l(t))).then(()=>t(839941)))},639363,e=>{e.v(t=>Promise.all(["static/chunks/0b7243217cea5db1.js"].map(t=>e.l(t))).then(()=>t(904340)))},425360,e=>{e.v(t=>Promise.all(["static/chunks/cde40550f50b3b6f.js"].map(t=>e.l(t))).then(()=>t(409222)))},548315,e=>{e.v(t=>Promise.all(["static/chunks/b2deafa6d13321ab.js","static/chunks/a2c1107070f1b997.js"].map(t=>e.l(t))).then(()=>t(256337)))},661328,e=>{e.v(t=>Promise.all(["static/chunks/4c7fe0d20c843c4a.js","static/chunks/a2c1107070f1b997.js"].map(t=>e.l(t))).then(()=>t(447400)))},265029,e=>{e.v(t=>Promise.all(["static/chunks/de33bbeeba687268.js"].map(t=>e.l(t))).then(()=>t(289339)))},151872,e=>{e.v(t=>Promise.all(["static/chunks/f20b01564050bc67.js"].map(t=>e.l(t))).then(()=>t(865389)))},329867,e=>{e.v(t=>Promise.all(["static/chunks/e954def393a60c84.js"].map(t=>e.l(t))).then(()=>t(562380)))},643342,e=>{e.v(t=>Promise.all(["static/chunks/fb138c21e6990242.js","static/chunks/d0762223f07ce76b.js","static/chunks/7a8ab29e57cf686f.js","static/chunks/c6dad1bec3c730ca.js","static/chunks/d8dbe5d60074dc0c.js","static/chunks/b95cc276837b07f0.js","static/chunks/dfbb0e5ba085a60d.js"].map(t=>e.l(t))).then(()=>t(232258)))},804879,e=>{e.v(t=>Promise.all(["static/chunks/6b2767d0f5a727ec.js","static/chunks/d8dbe5d60074dc0c.js","static/chunks/64f67575d0d4f19a.js"].map(t=>e.l(t))).then(()=>t(199687)))},95833,e=>{e.v(t=>Promise.all(["static/chunks/059567888ea62dba.js"].map(t=>e.l(t))).then(()=>t(142543)))},846537,e=>{e.v(t=>Promise.all(["static/chunks/67cb65c7388bee27.js"].map(t=>e.l(t))).then(()=>t(245201)))},50229,e=>{e.v(t=>Promise.all(["static/chunks/f7b741bc7a4bd5b0.js"].map(t=>e.l(t))).then(()=>t(331248)))},263652,e=>{e.v(t=>Promise.all(["static/chunks/c981d0d3af8aa708.js"].map(t=>e.l(t))).then(()=>t(700224)))},822335,e=>{e.v(t=>Promise.all(["static/chunks/7f2cd111fc8c1210.js"].map(t=>e.l(t))).then(()=>t(48216)))},827389,e=>{e.v(t=>Promise.all(["static/chunks/23046f80e03114d8.js"].map(t=>e.l(t))).then(()=>t(780795)))},306465,e=>{e.v(t=>Promise.all(["static/chunks/70459168b0fa453a.js"].map(t=>e.l(t))).then(()=>t(84223)))},320810,e=>{e.v(t=>Promise.all(["static/chunks/f91758c01b08cc3e.js"].map(t=>e.l(t))).then(()=>t(190529)))},44756,e=>{e.v(t=>Promise.all(["static/chunks/07d22078145c3460.js"].map(t=>e.l(t))).then(()=>t(411609)))},77572,e=>{e.v(t=>Promise.all(["static/chunks/2d8c27ae1d92b734.js"].map(t=>e.l(t))).then(()=>t(550910)))},299015,e=>{e.v(t=>Promise.all(["static/chunks/17d49cb5de23a8ee.js"].map(t=>e.l(t))).then(()=>t(956403)))},853832,e=>{e.v(t=>Promise.all(["static/chunks/7dfd5a4c2c2dec08.js"].map(t=>e.l(t))).then(()=>t(523047)))},444444,e=>{e.v(t=>Promise.all(["static/chunks/ccf4a0dd1fded759.js"].map(t=>e.l(t))).then(()=>t(306141)))},89982,e=>{e.v(t=>Promise.all(["static/chunks/d6719cf49b5b727a.js"].map(t=>e.l(t))).then(()=>t(84181)))},439,e=>{e.v(t=>Promise.all(["static/chunks/55d2d0bdd2951dec.js"].map(t=>e.l(t))).then(()=>t(585967)))},674055,e=>{e.v(t=>Promise.all(["static/chunks/44ca04ce086bd7f0.js"].map(t=>e.l(t))).then(()=>t(659864)))},801894,e=>{e.v(t=>Promise.all(["static/chunks/c468b82b8f6f6f96.js"].map(t=>e.l(t))).then(()=>t(532683)))},578444,e=>{e.v(t=>Promise.all(["static/chunks/db2e9be2e216ba01.js"].map(t=>e.l(t))).then(()=>t(221183)))},185608,e=>{e.v(t=>Promise.all(["static/chunks/4111b13143ccf286.js"].map(t=>e.l(t))).then(()=>t(79472)))},612314,e=>{e.v(t=>Promise.all(["static/chunks/6d44fd63da93848d.js"].map(t=>e.l(t))).then(()=>t(980791)))},660943,e=>{e.v(t=>Promise.all(["static/chunks/c99bfe95fcbeea0d.js"].map(t=>e.l(t))).then(()=>t(620893)))},214615,e=>{e.v(t=>Promise.all(["static/chunks/1aeea5890cd203b1.js"].map(t=>e.l(t))).then(()=>t(194742)))},877303,e=>{e.v(t=>Promise.all(["static/chunks/c8566f015bc50e1b.js"].map(t=>e.l(t))).then(()=>t(85809)))},565731,e=>{e.v(t=>Promise.all(["static/chunks/a2bf3fb896d5ec57.js"].map(t=>e.l(t))).then(()=>t(846526)))},439954,e=>{e.v(t=>Promise.all(["static/chunks/6d8909f67ae0f0b1.js"].map(t=>e.l(t))).then(()=>t(399358)))},646193,e=>{e.v(t=>Promise.all(["static/chunks/59ecb4bad9f7b762.js"].map(t=>e.l(t))).then(()=>t(270671)))},470322,e=>{e.v(t=>Promise.all(["static/chunks/f7ca1b70aaf76841.js"].map(t=>e.l(t))).then(()=>t(433215)))},310666,e=>{e.v(t=>Promise.all(["static/chunks/c29b3dc53abbda08.js"].map(t=>e.l(t))).then(()=>t(191809)))},38970,e=>{e.v(t=>Promise.all(["static/chunks/93ffb4ec447ef8a5.js","static/chunks/3b524f8bbafc6bb0.js","static/chunks/6e76430c33674dfb.js"].map(t=>e.l(t))).then(()=>t(66554)))},68365,e=>{e.v(t=>Promise.all(["static/chunks/40efedadbca122ad.js"].map(t=>e.l(t))).then(()=>t(531769)))},705292,e=>{e.v(t=>Promise.all(["static/chunks/055f0ce00306f8fb.js"].map(t=>e.l(t))).then(()=>t(147575)))},930188,e=>{e.v(t=>Promise.all(["static/chunks/038650fa07cfdc11.js"].map(t=>e.l(t))).then(()=>t(604919)))},736620,e=>{e.v(t=>Promise.all(["static/chunks/fb200c2b93e182d4.js"].map(t=>e.l(t))).then(()=>t(85022)))},101928,e=>{e.v(t=>Promise.all(["static/chunks/b11be5a5365b7b1d.js"].map(t=>e.l(t))).then(()=>t(846161)))},41375,e=>{e.v(t=>Promise.all(["static/chunks/19fafb44a9ee83a0.js"].map(t=>e.l(t))).then(()=>t(834473)))},715733,e=>{e.v(t=>Promise.all(["static/chunks/dedb7c002a5b836e.js"].map(t=>e.l(t))).then(()=>t(417897)))},268726,e=>{e.v(t=>Promise.all(["static/chunks/2b9a54a204be3ea5.js"].map(t=>e.l(t))).then(()=>t(898187)))},740028,e=>{e.v(t=>Promise.all(["static/chunks/2a56173bb4d8d2e8.js"].map(t=>e.l(t))).then(()=>t(391060)))},134805,e=>{e.v(t=>Promise.all(["static/chunks/09d7d16fe23f2d32.js"].map(t=>e.l(t))).then(()=>t(664336)))},597523,e=>{e.v(t=>Promise.all(["static/chunks/1686ac299bf2b8a6.js"].map(t=>e.l(t))).then(()=>t(245099)))},678679,e=>{e.v(t=>Promise.all(["static/chunks/0eb10d9ae54239cf.js"].map(t=>e.l(t))).then(()=>t(404154)))},73751,e=>{e.v(t=>Promise.all(["static/chunks/534c65d50409a48e.js"].map(t=>e.l(t))).then(()=>t(31724)))},909495,e=>{e.v(t=>Promise.all(["static/chunks/741fb96c542dcc31.js"].map(t=>e.l(t))).then(()=>t(698380)))},548863,e=>{e.v(t=>Promise.all(["static/chunks/c3f8a9c3264c3a27.js"].map(t=>e.l(t))).then(()=>t(79703)))},283398,e=>{e.v(t=>Promise.all(["static/chunks/a831e507fc1e8e16.js"].map(t=>e.l(t))).then(()=>t(541970)))},274794,e=>{e.v(t=>Promise.all(["static/chunks/85fc0185a566cc9e.js","static/chunks/7c75f9b22dd552eb.js","static/chunks/d8dbe5d60074dc0c.js","static/chunks/04c7aa89805e9d6f.js","static/chunks/b7ddfc1e1cd211ce.js"].map(t=>e.l(t))).then(()=>t(571538)))},248383,e=>{e.v(t=>Promise.all(["static/chunks/8eae2b2a61c2c335.js"].map(t=>e.l(t))).then(()=>t(136003)))},579437,e=>{e.v(t=>Promise.all(["static/chunks/d8f280af070cdc25.js","static/chunks/7d664c36fff2698a.js","static/chunks/d8dbe5d60074dc0c.js"].map(t=>e.l(t))).then(()=>t(524943)))},609157,e=>{e.v(t=>Promise.all(["static/chunks/f6e70828d799368c.js","static/chunks/7d664c36fff2698a.js","static/chunks/d8dbe5d60074dc0c.js"].map(t=>e.l(t))).then(()=>t(323205)))},707643,e=>{e.v(t=>Promise.all(["static/chunks/e4ea09d42850c067.js"].map(t=>e.l(t))).then(()=>t(935100)))},467186,e=>{e.v(t=>Promise.all(["static/chunks/0d5e38ebab91b65b.js"].map(t=>e.l(t))).then(()=>t(6777)))},639206,e=>{e.v(t=>Promise.all(["static/chunks/3176bcf865586de8.js","static/chunks/09f103b609f1af96.js"].map(t=>e.l(t))).then(()=>t(791713)))},250577,e=>{e.v(t=>Promise.all(["static/chunks/b29daa241ce7cfe6.js"].map(t=>e.l(t))).then(()=>t(429091)))},610764,e=>{e.v(t=>Promise.all(["static/chunks/cff23c5bde7a0a22.js","static/chunks/78ccdd35ee742910.js"].map(t=>e.l(t))).then(()=>t(247311)))},818633,e=>{e.v(t=>Promise.all(["static/chunks/23fd0b1beab7e136.js","static/chunks/3cbd4461b66583f0.js"].map(t=>e.l(t))).then(()=>t(338481)))},500556,e=>{e.v(t=>Promise.all(["static/chunks/91a92f6b83f7ddbd.css","static/chunks/5ecb30c151f448b2.css","static/chunks/85fc0185a566cc9e.js","static/chunks/7c75f9b22dd552eb.js","static/chunks/a649b3110ae12ccd.js","static/chunks/60b78b249901b690.js","static/chunks/c1ed92efdfd83ed9.js","static/chunks/333911c9bbc87239.js","static/chunks/36a64fb74ada6a5c.js"].map(t=>e.l(t))).then(()=>t(321608)))},596207,e=>{e.v(t=>Promise.all(["static/chunks/31df540585b67ad3.js","static/chunks/4a21c6f9e75f6253.js"].map(t=>e.l(t))).then(()=>t(865243)))},354946,e=>{e.v(t=>Promise.all(["static/chunks/e34798b5bf92b730.js","static/chunks/4a21c6f9e75f6253.js"].map(t=>e.l(t))).then(()=>t(674412)))},943222,e=>{e.v(t=>Promise.all(["static/chunks/05ab52f3accbc75a.js"].map(t=>e.l(t))).then(()=>t(140017)))},98740,e=>{e.v(t=>Promise.all(["static/chunks/a3e2df630ce97c7a.js"].map(t=>e.l(t))).then(()=>t(795776)))},429186,e=>{e.v(t=>Promise.all(["static/chunks/258ee5577858125a.js","static/chunks/72b3d15e45a0ce77.js","static/chunks/5a17a5b381ca9caa.js","static/chunks/ff50c30730dcbba6.js","static/chunks/582dd4e9fa43b338.js","static/chunks/a236dbaf1a5d471a.js"].map(t=>e.l(t))).then(()=>t(818996)))},488584,e=>{e.v(t=>Promise.all(["static/chunks/8059e2ca97e93a45.js"].map(t=>e.l(t))).then(()=>t(851420)))}]);

//# debugId=0684ce20-3767-ae58-bc8f-eb8b09c79876
//# sourceMappingURL=df07092060b811f6.js.map