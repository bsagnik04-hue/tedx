;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="53d98cc5-56d7-c468-274f-f364ae70eee6")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,818135,e=>{"use strict";e.s(["privilegeKeys",0,{tablePrivilegesList:e=>["projects",e,"database","table-privileges"],columnPrivilegesList:e=>["projects",e,"database","column-privileges"],exposedTablesInfinite:(e,t)=>["projects",e,"privileges","exposed-tables-infinite",...t?[{search:t}]:[]],exposedTableCounts:(e,t)=>["projects",e,"privileges","exposed-table-counts",...t?[t]:[]],exposedFunctionsInfinite:(e,t)=>["projects",e,"privileges","exposed-functions-infinite",...t?[{search:t}]:[]],exposedFunctionCounts:(e,t)=>["projects",e,"privileges","exposed-function-counts",...t?[t]:[]],defaultPrivileges:(e,t)=>["projects",e,"privileges","default-privileges",...t?[t]:[]]}])},972089,e=>{"use strict";var t=e.i(850036),s=e.i(242882),a=e.i(818135),r=e.i(714403);let n=t.default.tablePrivileges.list();async function i({projectRef:e,connectionString:t},s){let{result:a}=await (0,r.executeSql)({projectRef:e,connectionString:t,sql:n.sql,queryKey:["table-privileges"]},s);return a}function o(e,t){return e.invalidateQueries({queryKey:a.privilegeKeys.tablePrivilegesList(t)})}e.s(["invalidateTablePrivilegesQuery",()=>o,"useTablePrivilegesQuery",0,({projectRef:e,connectionString:t},{enabled:r=!0,...n}={})=>(0,s.useQuery)({queryKey:a.privilegeKeys.tablePrivilegesList(e),queryFn:({signal:s})=>i({projectRef:e,connectionString:t},s),enabled:r&&void 0!==e,...n})])},197187,e=>{"use strict";let t=(0,e.i(388019).default)("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);e.s(["default",()=>t])},200722,e=>{"use strict";var t=e.i(711339),s=e.i(389959);e.s(["useTableEditorFiltersSort",0,()=>{let e=(0,t.useRouter)(),a=(0,s.useMemo)(()=>new URLSearchParams(e.asPath.split("?")[1]),[e.asPath]),r=(0,s.useMemo)(()=>a.getAll("filter"),[a]),n=(0,s.useMemo)(()=>a.getAll("sort"),[a]),i=(0,s.useCallback)(t=>{let s=t({filter:r,sort:n}),a=void 0!==s.filter,i=void 0!==s.sort;e.push({query:{...e.query,...a?{filter:s.filter}:{},...i?{sort:s.sort}:{}}},void 0,{shallow:!0})},[r,n]);return{filters:r,sorts:n,setParams:i}}])},532427,e=>{"use strict";var t=e.i(197187);e.s(["Filter",()=>t.default])},632459,e=>{"use strict";var t=e.i(389959),s=e.i(19583),a=e.i(200722);function r(){let{filters:e,setParams:r}=(0,a.useTableEditorFiltersSort)(),n=(0,s.formatFilterURLParams)(e);return{filters:n,urlFilters:e,onApplyFilters:(0,t.useCallback)(e=>{let t=(0,s.filtersToUrlParams)(e);r(e=>({...e,filter:t}))},[r]),clearFilters:(0,t.useCallback)(()=>{r(e=>({...e,filter:[]}))},[r])}}e.s(["useTableFilter",()=>r])},437893,963203,84001,954707,e=>{"use strict";e.i(850036);var t=e.i(779262),s=e.i(242882),a=e.i(356003);e.i(128328);var r=e.i(86086),n=e.i(790819),i=e.i(46974),o=e.i(19583),l=e.i(150671),u=e.i(714403),c=e.i(34479),d=e.i(908937),m=e.i(201461);async function p({queryClient:e,projectRef:s,connectionString:a,tableId:r,filters:n,roleImpersonationState:l,enforceExactCount:p,isUsingReadReplica:h=!1},f){let _=await (0,c.prefetchTableEditor)(e,{projectRef:s,connectionString:a,id:r});if(!_)throw Error("Table not found");let y=(0,o.parseSupaTable)(_),g=n?.map(e=>({...e,value:(0,i.formatFilterValue)(y,e)})),b=(0,d.wrapWithRoleImpersonation)((0,t.getTableRowsCountSql)({table:y,filters:g,enforceExactCount:p,isUsingReadReplica:h}),l),{result:x}=await (0,u.executeSql)({projectRef:s,connectionString:a,sql:b,queryKey:["table-rows-count",y.id],isRoleImpersonationEnabled:(0,m.isRoleImpersonationEnabled)(l?.role)},f);return{count:x?.[0]?.count,is_estimate:x?.[0]?.is_estimate??!1}}e.s(["useTableRowsCountQuery",0,({projectRef:e,tableId:t,...i},{enabled:o=!0,...u}={})=>{let c=(0,a.useQueryClient)(),{connectionString:d,identifier:m,type:h}=(0,l.useConnectionStringForReadOps)();return(0,s.useQuery)({queryKey:n.tableRowKeys.tableRowsCount(e,{table:{id:t},readReplicaIdentifier:m,...i}),queryFn:({signal:s})=>p({queryClient:c,projectRef:e,connectionString:d,tableId:t,isUsingReadReplica:"replica"===h,...i},s),enabled:o&&void 0!==e&&void 0!==t&&(!r.IS_PLATFORM||void 0!==d),...u})}],437893);var h=e.i(389959),f=e.i(972089),_=e.i(462142);let y=({projectRef:e,schemaName:t},{enabled:s=!0}={})=>{let a=s&&!!e&&!!t,{data:r,isPending:n,isError:i}=(0,_.useProjectPostgrestConfigQuery)({projectRef:e},{enabled:a,select:({db_schema:e})=>e}),o=(0,h.useMemo)(()=>r?(0,_.parseDbSchemaString)(r):[],[r]);return!a||n?{status:"pending",data:void 0,isPending:!0,isError:!1,isSuccess:!1}:i?{status:"error",data:void 0,isPending:!1,isError:!0,isSuccess:!1}:{status:"success",data:o.includes(t),isPending:!1,isError:!1,isSuccess:!0}};e.s(["useIsSchemaExposed",0,y],963203);let g=["anon","authenticated","service_role"],b=e=>g.includes(e),x=["SELECT","INSERT","UPDATE","DELETE"],v=e=>x.includes(e),E={anon:[...x],authenticated:[...x],service_role:[...x]};e.s(["API_ACCESS_ROLES",0,g,"API_PRIVILEGE_TYPES",0,x,"DEFAULT_DATA_API_PRIVILEGES",0,E,"EMPTY_DATA_API_PRIVILEGES",0,{anon:[],authenticated:[],service_role:[]},"checkDataApiPrivilegesNonEmpty",0,e=>!!e&&Object.values(e).some(e=>e.length>0),"isApiAccessRole",0,b,"isApiPrivilegeType",0,v],84001);let j=[],w={};e.s(["useTableApiAccessQuery",0,({projectRef:e,connectionString:t,schemaName:s,tableNames:a=j},{enabled:r=!0,...n}={})=>{let i=(0,h.useMemo)(()=>new Set(a.filter(e=>"string"==typeof e&&e.length>0)),[a]),o=i.size>0,l=y({projectRef:e,schemaName:s},{enabled:r}),u=l.isSuccess&&!0===l.data,c=r&&o,d=(0,f.useTablePrivilegesQuery)({projectRef:e,connectionString:t},{enabled:c,...n});return(0,h.useMemo)(()=>{if(!r||"pending"===l.status||c&&d.isPending)return{data:void 0,status:"pending",isSuccess:!1,isPending:!0,isError:!1};if("error"===l.status||c&&d.isError)return{data:void 0,status:"error",isSuccess:!1,isPending:!1,isError:!0};if(!o)return{data:w,status:"success",isSuccess:!0,isPending:!1,isError:!1};let e={},t=u?((e,t,s)=>{if(!e)return{};let a={};return e.forEach(e=>{if(e.schema===t&&s.has(e.name)){var r;let t;a[e.name]=(r=e.privileges,t={anon:[],authenticated:[],service_role:[]},r.forEach(e=>{let{grantee:s,privilege_type:a}=e;b(s)&&v(a)&&t[s].push(a)}),t)}}),a})(d.data,s,i):{};return i.forEach(s=>{if(!u){e[s]={apiAccessType:"none"};return}let a=t[s]??{anon:[],authenticated:[],service_role:[]},r=a.anon.length>0||a.authenticated.length>0||a.service_role.length>0;e[s]=r?{apiAccessType:"access",privileges:a}:{apiAccessType:"exposed-schema-no-grants"}}),{data:e,status:"success",isSuccess:!0,isPending:!1,isError:!1}},[r,c,o,l.status,u,d.isPending,d.isError,d.data,s,i])}],954707)},1962,e=>{"use strict";var t=e.i(478902),s=e.i(459323),a=e.i(389959),r=e.i(837491),n=e.i(57352);let i="Progress",[o,l]=(0,r.createContextScope)(i),[u,c]=o(i),d=(0,a.forwardRef)((e,t)=>{let{__scopeProgress:r,value:i,max:o,getValueLabel:l=p,...c}=e,d=_(o)?o:100,m=y(i,d)?i:null,g=f(m)?l(m,d):void 0;return(0,a.createElement)(u,{scope:r,value:m,max:d},(0,a.createElement)(n.Primitive.div,(0,s.default)({"aria-valuemax":d,"aria-valuemin":0,"aria-valuenow":f(m)?m:void 0,"aria-valuetext":g,role:"progressbar","data-state":h(m,d),"data-value":null!=m?m:void 0,"data-max":d},c,{ref:t})))});d.propTypes={max(e,t,s){var a,r;let n=e[t],i=String(n);return n&&!_(n)?Error((a=i,r=s,`Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`)):null},value(e,t,s){var a,r;let n=e[t],i=String(n),o=_(e.max)?e.max:100;return null==n||y(n,o)?null:Error((a=i,r=s,`Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`))}};let m=(0,a.forwardRef)((e,t)=>{var r;let{__scopeProgress:i,...o}=e,l=c("ProgressIndicator",i);return(0,a.createElement)(n.Primitive.div,(0,s.default)({"data-state":h(l.value,l.max),"data-value":null!=(r=l.value)?r:void 0,"data-max":l.max},o,{ref:t}))});function p(e,t){return`${Math.round(e/t*100)}%`}function h(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function f(e){return"number"==typeof e}function _(e){return f(e)&&!isNaN(e)&&e>0}function y(e,t){return f(e)&&!isNaN(e)&&e<=t&&e>=0}var g=e.i(843778);let b=a.forwardRef(({className:e,value:s,...a},r)=>(0,t.jsx)(d,{ref:r,className:(0,g.cn)("relative h-1 w-full overflow-hidden rounded-full bg-surface-300",e),...a,children:(0,t.jsx)(m,{className:"h-full w-full flex-1 bg-foreground transition-all",style:{transform:`translateX(-${100-(s||0)}%)`}})}));b.displayName=d.displayName,e.s(["Progress",()=>b],1962)},474325,e=>{"use strict";var t=e.i(478902),s=e.i(774803),a=e.i(1962);e.s(["SonnerProgress",0,({progress:e,progressPrefix:r,action:n,message:i,description:o="Please do not close the browser"})=>(0,t.jsxs)("div",{className:"flex gap-3 w-full",children:[(0,t.jsx)(s.Loader2,{className:"animate-spin text-foreground-muted mt-0.5",size:16}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,t.jsxs)("div",{className:"flex w-full justify-between",children:[(0,t.jsx)("p",{className:"text-foreground text-sm",children:i}),(0,t.jsxs)("p",{className:"text-foreground-light text-sm font-mono",children:[r||"",`${Number(e).toFixed(0)}%`]})]}),(0,t.jsx)(a.Progress,{value:e,className:"w-full"}),(0,t.jsxs)("div",{className:"flex flex-row gap-2 items-center justify-between",children:[(0,t.jsx)("small",{className:"text-foreground-lighter text-xs",children:o}),n]})]})]})])},93472,165610,e=>{"use strict";var t=e.i(478902);let s=(0,e.i(388019).default)("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);e.s(["AlertOctagon",()=>s],165610);var a=e.i(217444),r=e.i(872646),n=e.i(833655),i=e.i(975924),o=e.i(389959),l=e.i(938933);let u={danger:(0,t.jsx)(s,{strokeWidth:1.5,size:18}),success:(0,t.jsx)(r.CheckCircle,{strokeWidth:1.5,size:18}),warning:(0,t.jsx)(a.AlertTriangle,{strokeWidth:1.5,size:18}),info:(0,t.jsx)(n.Info,{strokeWidth:1.5,size:18}),neutral:(0,t.jsx)(t.Fragment,{})};function c({variant:e="neutral",className:s,title:a,withIcon:r,closable:n,children:c,icon:d,actions:m}){let p=(0,l.default)("alert"),[h,f]=(0,o.useState)(!0),_=[p.base];_.push(p.variant[e].base),s&&_.push(s);let y=[p.description,p.variant[e].description],g=[p.close];return(0,t.jsx)(t.Fragment,{children:h&&(0,t.jsxs)("div",{className:_.join(" "),children:[r?(0,t.jsx)("div",{className:p.variant[e].icon,children:r&&u[e]}):null,d&&d,(0,t.jsxs)("div",{className:"flex flex-1 items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:[p.variant[e].header,p.header].join(" "),children:a}),(0,t.jsx)("div",{className:y.join(" "),children:c})]}),m]}),n&&(0,t.jsx)("button",{"aria-label":"Close alert",onClick:()=>f(!1),className:g.join(" "),children:(0,t.jsx)(i.X,{strokeWidth:2,size:16})})]})})}e.s(["Alert",()=>c],93472)},492636,e=>{"use strict";var t=e.i(478902),s=e.i(753515),a=e.i(938933),r=e.i(140449);let n=(0,e.i(389959).createContext)({parentCallback:e=>{},parentSize:""});function i({className:e,id:s="",name:i="",label:o,afterLabel:l,beforeLabel:u,description:c,checked:d,value:m,onChange:p,onBlur:h,size:f="medium",disabled:_=!1,...y}){let{formContextOnChange:g,values:b,handleBlur:x}=(0,r.useFormContext)(),v=(0,a.default)("checkbox");return(0,t.jsx)(n.Consumer,{children:({parentCallback:a,parentSize:r})=>{let n=s||i||(o?o.toLowerCase().replace(/^[^A-Z0-9]+/gi,"").replace(/ /g,"-"):void 0);f=r||f;let E=i||n,j=d??void 0,w=[v.container];return e&&w.push(e),b&&void 0===d&&(j=b[s||i]),(0,t.jsxs)("div",{className:w.join(" "),children:[(0,t.jsx)("input",{id:n,name:E,type:"checkbox",className:[v.base,v.size[f]].join(" "),onChange:function(e){a&&a(e),p&&p(e),g&&g(e)},onBlur:function(e){x&&setTimeout(()=>{x(e)},100),h&&h(e)},checked:j,value:m||n,disabled:_,...y}),(0,t.jsxs)("label",{className:[v.label.base,v.label[f]].join(" "),htmlFor:n,children:[(0,t.jsxs)("span",{children:[u&&(0,t.jsx)("span",{className:[v.label_before.base,v.label_before[f]].join(" "),children:u}),o,l&&(0,t.jsx)("span",{className:[v.label_after.base,v.label_after[f]].join(" "),children:l})]}),c&&(0,t.jsx)("p",{className:[v.description.base,v.description[f]].join(" "),children:c})]})]})}})}i.Group=function({id:e,layout:r="vertical",error:o,descriptionText:l,label:u,afterLabel:c,beforeLabel:d,labelOptional:m,children:p,className:h,options:f,onChange:_,size:y="medium"}){let g=(0,a.default)("checkbox");return(0,t.jsx)(s.FormLayout,{label:u,afterLabel:c,beforeLabel:d,labelOptional:m,layout:r,id:e,error:o,descriptionText:l,className:h,size:y,children:(0,t.jsx)(n.Provider,{value:{parentCallback:e=>{_&&_(e)},parentSize:y},children:(0,t.jsx)("div",{className:g.group,children:f?f.map(e=>(0,t.jsx)(i,{id:e.id,value:e.value,label:e.label,beforeLabel:e.beforeLabel,afterLabel:e.afterLabel,checked:e.checked,name:e.name,description:e.description,defaultChecked:e.defaultChecked},e.id)):p})})})},e.s(["default",0,i],492636)},461250,(e,t,s)=>{var a=e.r(291996),r=e.r(949667),n=e.r(684912),i=Math.ceil,o=Math.max;t.exports=function(e,t,s){t=(s?r(e,t,s):void 0===t)?1:o(n(t),0);var l=null==e?0:e.length;if(!l||t<1)return[];for(var u=0,c=0,d=Array(i(l/t));u<l;)d[c++]=a(e,u,u+=t);return d}},815545,e=>{"use strict";var t=e.i(492636);e.s(["Checkbox",()=>t.default])},929486,(e,t,s)=>{var a=Object.prototype.hasOwnProperty;t.exports=function(e,t){return null!=e&&a.call(e,t)}},460224,(e,t,s)=>{var a=e.r(929486),r=e.r(129718);t.exports=function(e,t){return null!=e&&r(e,t,a)}},143692,e=>{"use strict";let t=(0,e.i(388019).default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["default",()=>t])},971687,e=>{"use strict";var t=e.i(143692);e.s(["Calendar",()=>t.default])},245049,e=>{"use strict";var t=e.i(478902),s=e.i(954541),a=e.i(975924),r=e.i(938933);function n({align:e="center",ariaLabel:a,arrow:n=!1,children:i,className:o,defaultOpen:l=!1,modal:u,onOpenChange:c,open:d,overlay:m,side:p="bottom",sideOffset:h=6,style:f,header:_,footer:y,size:g="content",disabled:b,"data-testid":x}){let v=(0,r.default)("popover"),E=[v.content,v.size[g]];return o&&E.push(o),(0,t.jsxs)(s.Root,{defaultOpen:l,modal:u,onOpenChange:c,open:d,children:[(0,t.jsx)(s.Trigger,{disabled:b,className:v.trigger,"aria-label":a,"data-testid":x,children:i}),(0,t.jsx)(s.Portal,{children:(0,t.jsxs)(s.Content,{sideOffset:h,side:p,align:e,className:E.join(" "),style:f,children:[n&&(0,t.jsx)(s.Arrow,{offset:10}),_&&(0,t.jsx)("div",{className:v.header,children:_}),m,y&&(0,t.jsx)("div",{className:v.footer,children:y})]})})]})}n.Separator=function(){let e=(0,r.default)("popover");return(0,t.jsx)("div",{className:e.separator})},n.Close=function(){let e=(0,r.default)("popover");return(0,t.jsx)(s.Close,{className:e.close,children:(0,t.jsx)(a.X,{size:14,strokeWidth:2})})},e.s(["default",0,n])},463783,e=>{"use strict";var t=e.i(245049);e.s(["Popover",()=>t.default])},336908,e=>{"use strict";var t=e.i(478902),s=e.i(389959),a=e.i(232520);e.s(["DiscardChangesConfirmationDialog",0,({visible:e,onClose:r,onCancel:n,title:i="Unsaved changes",description:o="You have unsaved changes. Are you sure you want to discard them?",confirmLabel:l="Discard changes",cancelLabel:u="Keep editing",size:c="tiny"})=>{let d=(0,s.useRef)(!1);(0,s.useEffect)(()=>{e&&(d.current=!1)},[e]);let m=(0,s.useCallback)(()=>{d.current=!0,r()},[r]),p=(0,s.useCallback)(e=>{if(!e){if(d.current){d.current=!1;return}n()}},[n]);return(0,t.jsx)(a.AlertDialog,{open:e,onOpenChange:p,children:(0,t.jsxs)(a.AlertDialogContent,{size:c,children:[(0,t.jsxs)(a.AlertDialogHeader,{children:[(0,t.jsx)(a.AlertDialogTitle,{children:i}),null!=o&&(0,t.jsx)(a.AlertDialogDescription,{children:o})]}),(0,t.jsxs)(a.AlertDialogFooter,{children:[(0,t.jsx)(a.AlertDialogCancel,{children:u}),(0,t.jsx)(a.AlertDialogAction,{variant:"danger",onClick:m,children:l})]})]})})}])},412385,e=>{"use strict";var t=e.i(389959),s=e.i(323796);e.s(["useConfirmOnClose",0,({checkIsDirty:e,onClose:a})=>{let[r,n]=(0,t.useState)(!1),i=(0,s.default)(e),o=(0,s.default)(a),l=(0,t.useCallback)(()=>{i.current()?n(!0):o.current()},[]),u=(0,t.useCallback)(e=>{e||l()},[l]),c=(0,t.useCallback)(()=>{n(!1),o.current()},[]),d=(0,t.useCallback)(()=>{n(!1)},[]),m=(0,t.useMemo)(()=>({visible:r,onClose:c,onCancel:d}),[r,c,d]);return(0,t.useMemo)(()=>({confirmOnClose:l,handleOpenChange:u,modalProps:m}),[l,u,m])}])},931078,(e,t,s)=>{var a=e.r(358849),r=e.r(854059),n=e.r(225083),i=e.r(145948),o=e.r(775484),l=e.r(904216),u=e.r(85057),c=e.r(562081),d=Object.prototype.hasOwnProperty;t.exports=function(e){if(null==e)return!0;if(o(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||l(e)||c(e)||n(e)))return!e.length;var t=r(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(u(e))return!a(e).length;for(var s in e)if(d.call(e,s))return!1;return!0}},509847,e=>{"use strict";e.s(["databasePoliciesKeys",0,{list:(e,t)=>["projects",e,"database-policies",t].filter(Boolean)}])},847278,e=>{"use strict";var t=e.i(850036),s=e.i(38429),a=e.i(356003),r=e.i(355901),n=e.i(138658),i=e.i(915993),o=e.i(714403),l=e.i(938343);async function u({projectRef:e,connectionString:s,id:a,name:r,schema:n,payload:i}){let{sql:l}=t.default.tables.update({id:a,name:r,schema:n},i),{result:u}=await (0,o.executeSql)({projectRef:e,connectionString:s,sql:l,queryKey:["table","update",a]});return u}e.s(["updateTable",()=>u,"useTableUpdateMutation",0,({onSuccess:e,onError:t,...o}={})=>{let c=(0,a.useQueryClient)();return(0,s.useMutation)({mutationFn:e=>u(e),async onSuccess(t,s,a){let{projectRef:r,schema:o,id:u}=s;await Promise.all([c.invalidateQueries({queryKey:l.tableEditorKeys.tableEditor(r,u)}),c.invalidateQueries({queryKey:n.tableKeys.list(r,o)}),c.invalidateQueries({queryKey:i.lintKeys.lint(r)})]),await e?.(t,s,a)},async onError(e,s,a){void 0===t?r.toast.error(`Failed to update database table: ${e.message}`):t(e,s,a)},...o})}])},938343,e=>{"use strict";e.s(["tableEditorKeys",0,{tableEditor:(e,t)=>["projects",e,"table-editor",t].filter(Boolean)}])},34479,e=>{"use strict";e.i(850036);var t=e.i(664304),s=e.i(180141),a=e.i(242882),r=e.i(938343),n=e.i(714403);async function i({projectRef:e,connectionString:s,id:a},r){if(!a)throw Error("id is required");let i=(0,t.getTableEditorSql)({id:a}),{result:o}=await (0,n.executeSql)({projectRef:e,connectionString:s,sql:i,queryKey:["table-editor",a]},r);return o[0]?.entity??null}function o(e,{projectRef:t,connectionString:s,id:a}){return e.fetchQuery(l({projectRef:t,connectionString:s,id:a}))}let l=({projectRef:e,connectionString:t,id:a})=>(0,s.queryOptions)({queryKey:r.tableEditorKeys.tableEditor(e,a),queryFn:({signal:s})=>i({projectRef:e,connectionString:t,id:a},s)});e.s(["getTableEditor",()=>i,"prefetchTableEditor",()=>o,"tableEditorQueryOptions",0,l,"useTableEditorQuery",0,({projectRef:e,connectionString:t,id:s},{enabled:r=!0,...n}={})=>(0,a.useQuery)({...l({projectRef:e,connectionString:t,id:s}),enabled:r&&void 0!==e&&void 0!==s&&!isNaN(s),refetchOnWindowFocus:!1,refetchOnMount:!1,staleTime:3e5,...n})])},790819,585673,46974,e=>{"use strict";e.s(["tableRowKeys",0,{tableRows:(e,{table:t,roleImpersonationState:s,...a}={})=>["projects",e,"table-rows",t?.id,"rows",{roleImpersonation:s?.role,...a}],tableRowsCount:(e,{table:t,...s}={})=>["projects",e,"table-rows",t?.id,"count",s],tableRowsAndCount:(e,t)=>["projects",e,"table-rows",t]}],790819);let t=["smallint","integer","bigint","decimal","numeric","real","double precision","serial","bigserial","int2","int4","int8","float4","float8","smallserial","serial2","serial4","serial8"];function s(e){return t.indexOf(e.toLowerCase())>-1}let a=["json","jsonb","array"];function r(e){return a.indexOf(e.toLowerCase())>-1}let n=["array"];function i(e){return n.indexOf(e.toLowerCase())>-1}let o=["uuid","text","character varying"];function l(e){return o.indexOf(e.toLowerCase())>-1}let u=["citext"];function c(e){return u.indexOf(e.toLowerCase())>-1}let d=["timestamp","timestamptz"];function m(e){return d.indexOf(e.toLowerCase())>-1}let p=["date"];function h(e){return p.indexOf(e.toLowerCase())>-1}let f=["time","timetz"];function _(e){return f.indexOf(e.toLowerCase())>-1}let y=["boolean","bool"];function g(e){return y.indexOf(e.toLowerCase())>-1}let b=["user-defined"];function x(e){return b.indexOf(e.toLowerCase())>-1}let v=["bytea"];function E(e){return v.indexOf(e.toLowerCase())>-1}function j(e){let{targetTableSchema:t,targetTableName:s,targetColumnName:a}=e?.foreignKey??{};return!!t&&!!s&&!!a}e.s(["isArrayColumn",()=>i,"isBinaryColumn",()=>E,"isBoolColumn",()=>g,"isCiTextColumn",()=>c,"isDateColumn",()=>h,"isDateTimeColumn",()=>m,"isEnumColumn",()=>x,"isForeignKeyColumn",()=>j,"isJsonColumn",()=>r,"isNumericalColumn",()=>s,"isTextColumn",()=>l,"isTimeColumn",()=>_],585673);var w=e.i(962217);function S(e,t){let a=e.columns.find(e=>e.name==t.column);if(a&&s(a.format)){let e=Number(t.value);if(!Number.isNaN(e)&&!(e>Number.MAX_SAFE_INTEGER))return Number(t.value)}return t.value}function T({table:e}){if(!(0,w.isTableLike)(e))return{error:{message:"Only table rows can be updated or deleted"}};let t=e.primary_keys;return t&&0!=t.length?{primaryKeys:t.map(e=>e.name)}:{error:{message:"Please add a primary key column to your table to update or delete rows"}}}e.s(["formatFilterValue",()=>S,"getPrimaryKeys",()=>T],46974)},310959,e=>{"use strict";var t=e.i(479084),s=e.i(721490);let a=10240,r=50,n=["text","varchar","char","character varying","character"],i=["json","jsonb"],o=new Set(i),l=new Set([...n,...i,"bytea","xml","hstore","clob","vector","geometry","geography","tsvector","tsquery","daterange","tsrange","tstzrange","numrange","int4range","int8range","cube","ltree","lquery","jsonpath","citext"]);e.s(["MAX_ARRAY_SIZE",0,r,"MAX_CHARACTERS",0,a,"getTableRowsSql",0,({table:e,filters:i=[],sorts:u=[],page:c,limit:d,maxCharacters:m=a,maxArraySize:p=r,sortExcludedColumns:h=[]})=>{if(!e||!e.columns)return"";let f=new s.Query().from(e.name,e.schema).select();i.forEach(t=>{let s=e.columns?.find(e=>e.name===t.column),a=!s||n.includes(s.format);f=f.filter(t.column,t.operator,a||""!==t.value?t.value:null)});let _=e.live_rows_estimate||0;if(0===u.length&&_<=1e5&&e.columns.length>0){let t=((e,{excludedColumns:t=[]}={})=>{let s=e.primary_keys?.map(e=>e.name);if(s&&s.length>0&&!s.every(e=>t.includes(e)))return s;if(e.columns&&e.columns.length>0){let s=e.columns.filter(e=>!e.data_type.includes("json")&&!t.includes(e.name));if(s.length>0)return[s[0].name]}return[]})(e,{excludedColumns:h});t.length>0&&t.forEach(t=>{f=f.order(e.name,t)})}else u.forEach(e=>{f=f.order(e.table,e.column,e.ascending,e.nullsFirst)});let{from:y,to:g}=function(e,t=100){let s=e?e*t:0;return{from:s,to:e?s+t-1:t-1}}((c??1)-1,d),b=`with _base_query as (${f.range(y,g).toSql({isCTE:!1,isFinal:!1})})`,x=e.columns.sort((e,t)=>e.ordinal_position-t.ordinal_position).map(e=>({name:e.name,format:e.format.toLowerCase()})),v=e.columns.filter(e=>{let t;return t=e.format,l.has(t.toLowerCase())}).map(e=>e.name),E=x.map(({name:e})=>{let s=(0,t.ident)(e);return v.includes(e)?`case
        when octet_length(${s}::text) > ${m} 
        then left(${s}::text, ${m}) || '...'
        else ${s}::text
      end as ${s}`:s});e.columns.filter(e=>"array"===e.data_type.toLowerCase()).map(e=>({name:e.name,format:e.format.toLowerCase().slice(1)})).forEach(({name:e,format:s})=>{let a=E.findIndex(s=>s===(0,t.ident)(e)),r=o.has(s)?`${s}[]`:"text[]";a>=0&&(E[a]=`
        case 
          when octet_length(${(0,t.ident)(e)}::text) > ${m} 
          then
            case
              when array_ndims(${(0,t.ident)(e)}) = 1
              then
                (select array_cat(${(0,t.ident)(e)}[1:${p}]::${r}, ${"text[]"===r?"array['...']":"array['{\"truncated\": true}'::json]"}::${r}))::${r}
              else
                ${(0,t.ident)(e)}[1:${p}]::${r}
            end
          else ${(0,t.ident)(e)}::${r}
        end
      `)});let j=E.join(","),w=new s.Query().from("_base_query").select(j);return`${b}
  ${w.toSql({isCTE:!0,isFinal:!0})}`}])},941381,70756,e=>{"use strict";var t=e.i(478902),s=e.i(356003),a=e.i(711339),r=e.i(389959),n=e.i(85626),i=e.i(19583),o=e.i(150671),l=e.i(34479);e.i(850036);var u=e.i(389273);e.i(967533);var c=e.i(721490),d=e.i(310959),m=e.i(242882);e.i(128328);var p=e.i(86086),h=e.i(790819),f=e.i(46974),_=e.i(311827),y=e.i(234745),g=e.i(714403),b=e.i(962217),x=e.i(48189),v=e.i(908937),E=e.i(201461);e.i(56031);var j=e.i(237948);async function w(e,t=3,s=1e3){for(let a=0;a<=t;a++)try{return await e()}catch(e){if(429===(e instanceof j.ResponseError?e.code:e.status)&&a<t){let t=function(e){if(e instanceof j.ResponseError)return e.retryAfter;let t=e.headers?.get("retry-after");if(t)return parseInt(t)}(e),r=t?1e3*t:s*Math.pow(2,a);await (0,x.timeout)(r);continue}throw e}throw Error("Max retries reached without success")}let S=({table:e,filters:t=[],sorts:s=[]})=>{let a,r,n,i,o,l=new c.Query,u=e.columns.filter(e=>(e?.enum??[]).length>0&&"array"===e.dataType.toLowerCase()).map(e=>`"${e.name}"::text[]`),d=l.from(e.name,e.schema??void 0).select(u.length>0?`*,${u.join(",")}`:"*");t.filter(e=>e.value&&""!==e.value).forEach(t=>{let s=(0,f.formatFilterValue)(e,t);d=d.filter(t.column,t.operator,s)});let m=!1,{cursorPaginationEligible:p,cursorPaginationNonEligible:h}=(a=[],r=[],(n=e.primaryKey)&&a.push(n),i=e.uniqueIndexes,(o=i?.filter(t=>t.every(t=>{let s=e.columns.find(e=>e.name===t);return!!s&&!s.isNullable})))&&a.push(...o),r.push(...e.columns.filter(e=>!e.dataType.includes("json")).map(e=>e.name)),{cursorPaginationEligible:a,cursorPaginationNonEligible:r}),y=e.type===_.ENTITY_TYPE.TABLE||e.type===_.ENTITY_TYPE.PARTITIONED_TABLE||e.type===_.ENTITY_TYPE.MATERIALIZED_VIEW;if(0===s.length)p.length>0?(m=p[0],p[0].forEach(t=>{d=d.order(e.name,t)})):(h.length>0&&(d=d.order(e.name,h[0])),y&&(d=d.order(e.name,"ctid")));else{s.forEach(e=>{d=d.order(e.table,e.column,e.ascending,e.nullsFirst)});let t=p[0];if(t){let a=new Set(s.filter(t=>t.table===e.name).map(e=>e.column));t.filter(e=>!a.has(e)).forEach(t=>{d=d.order(e.name,t)})}else y&&(d=d.order(e.name,"ctid"))}return{sql:d,cursorColumns:m}},T=async({projectRef:e,connectionString:t,table:s,filters:a=[],sorts:r=[],roleImpersonationState:n,progressCallback:i})=>{if(p.IS_PLATFORM&&!t)return console.error("Connection string is required"),[];let o=[],{sql:l,cursorColumns:c}=S({table:s,sorts:r,filters:a});if(c){let s=null;for(;;){let a=l.clone();s&&(a=a.filter(c,">",c.map(e=>s[e])));let r=(0,v.wrapWithRoleImpersonation)(a.range(0,499).toSql(),n);try{let{result:a}=await w(async()=>(0,g.executeSql)({projectRef:e,connectionString:t,sql:r}));for(let e of(o.push(...a),i?.(o.length),s={},c))s[e]=a[a.length-1]?.[e];if(a.length<500)break;await (0,x.timeout)(500)}catch(e){throw Error(`Error fetching all table rows: ${e instanceof Error?e.message:"Unknown error"}`)}}}else{let s=-1;for(;;){let a=500*(s+=1),r=(s+1)*500-1,u=(0,v.wrapWithRoleImpersonation)(l.range(a,r).toSql(),n);try{let{result:s}=await w(async()=>(0,g.executeSql)({projectRef:e,connectionString:t,sql:u}));if(o.push(...s),i?.(o.length),s.length<500)break;await (0,x.timeout)(500)}catch(e){throw Error(`Error fetching all table rows: ${e instanceof Error?e.message:"Unknown error"}`)}}}return o.filter(e=>1!==e[u.ROLE_IMPERSONATION_NO_RESULTS])};async function q({queryClient:e,projectRef:t,connectionString:s,tableId:a,roleImpersonationState:r,filters:n,sorts:o,limit:u,page:c,preflightCheck:m=!1},p){let h=await (0,l.prefetchTableEditor)(e,{projectRef:t,connectionString:s,id:a});if(!h)throw Error("Table not found");let f=(0,i.parseSupaTable)(h),_=n?.filter(e=>"="===e.operator||"is"===e.operator).flatMap(e=>e.column),x=(0,b.isMsSqlForeignTable)(h)?Array.from(new Set(_)):void 0,j=(0,v.wrapWithRoleImpersonation)((0,d.getTableRowsSql)({table:h,filters:n,sorts:o,limit:u,page:c,sortExcludedColumns:x}),r);try{let{result:e}=await (0,g.executeSql)({projectRef:t,connectionString:s,sql:j,queryKey:["table-rows",f?.id],isRoleImpersonationEnabled:(0,E.isRoleImpersonationEnabled)(r?.role),preflightCheck:m},p);return{rows:e.map((e,t)=>({idx:t,...e}))}}catch(e){throw(0,y.handleError)(e)}}function A(e,{projectRef:t,connectionString:s,tableId:a,readReplicaIdentifier:r,...n}){return e.fetchQuery({queryKey:h.tableRowKeys.tableRows(t,{table:{id:a},readReplicaIdentifier:r,...n}),queryFn:({signal:r})=>q({queryClient:e,projectRef:t,connectionString:s,tableId:a,...n},r)})}e.s(["executeWithRetry",()=>w,"fetchAllTableRows",0,T,"getAllTableRowsSql",0,S,"prefetchTableRows",()=>A,"useTableRowsQuery",0,({projectRef:e,tableId:t,...a},{enabled:r=!0,...n}={})=>{let i=(0,s.useQueryClient)(),{connectionString:l,identifier:u}=(0,o.useConnectionStringForReadOps)(),{preflightCheck:c,...d}=a;return(0,m.useQuery)({queryKey:h.tableRowKeys.tableRows(e,{table:{id:t},readReplicaIdentifier:u,...d}),queryFn:({signal:s})=>q({queryClient:i,projectRef:e,connectionString:l,tableId:t,...a},s),enabled:r&&void 0!==e&&void 0!==t&&(!p.IS_PLATFORM||void 0!==l),...n})}],70756);var C=e.i(635494),N=e.i(636047);function R({queryClient:e,projectRef:t,connectionString:s,readReplicaIdentifier:a,id:r,sorts:n,filters:o,roleImpersonationState:u}){return(0,l.prefetchTableEditor)(e,{projectRef:t,connectionString:s,id:r}).then(l=>{if(l){let c=(0,i.parseSupaTable)(l),{sorts:d=[],filters:m=[]}=(0,i.loadTableEditorStateFromLocalStorage)(t,l.id)??{};A(e,{projectRef:t,connectionString:s,readReplicaIdentifier:a,tableId:r,sorts:n??(0,i.formatSortURLParams)(c.name,d),filters:o??(0,i.formatFilterURLParams)(m),page:1,limit:N.TABLE_EDITOR_DEFAULT_ROWS_PER_PAGE,roleImpersonationState:u})}})}function k(){let e=(0,a.useRouter)(),t=(0,s.useQueryClient)(),{data:n}=(0,C.useSelectedProjectQuery)(),{connectionString:i,identifier:l}=(0,o.useConnectionStringForReadOps)(),u=(0,E.useRoleImpersonationStateSnapshot)();return(0,r.useCallback)(({id:s,filters:a,sorts:r})=>{let o=s?Number(s):void 0;!n||!o||isNaN(o)||(e.prefetch(`/project/${n.ref}/editor/${o}`),R({queryClient:t,projectRef:n.ref,connectionString:i,readReplicaIdentifier:l,id:o,sorts:r,filters:a,roleImpersonationState:u}).catch(()=>{}))},[i,l,n,t,u,e])}function P({projectRef:e,id:s,sorts:a,filters:r,href:i,children:o,...l}){let u=k();return(0,t.jsx)(n.default,{href:i||`/project/${e}/editor/${s}`,prefetcher:()=>u({id:s,sorts:a,filters:r}),...l,children:o})}e.s(["EditorTablePageLink",()=>P,"prefetchEditorTablePage",()=>R,"usePrefetchEditorTablePage",()=>k],941381)},194576,e=>{"use strict";var t=e.i(478902),s=e.i(221287),a=e.i(938933);let r=({open:e,children:a,className:r,...n})=>(0,t.jsx)(s.Root,{asChild:n.asChild,defaultOpen:n.defaultOpen,open:e,onOpenChange:n.onOpenChange,disabled:n.disabled,className:r,children:a});r.Trigger=function({children:e,asChild:a}){return(0,t.jsx)(s.Trigger,{asChild:a,children:e})},r.Content=function({asChild:e,children:r,className:n}){let i=(0,a.default)("collapsible");return(0,t.jsx)(s.Content,{asChild:e,className:[i.content,n].join(" "),children:r})},e.s(["default",0,r])},58359,e=>{"use strict";var t=e.i(194576);e.s(["Collapsible",()=>t.default])},698175,e=>{"use strict";var t=e.i(478902),s=e.i(389959),a=e.i(753515),r=e.i(440401),n=e.i(701823),i=e.i(938933),o=e.i(140449);function l({autoComplete:e,autofocus:l,children:u,className:c,descriptionText:d,disabled:m,error:p,icon:h,id:f="",inputRef:_,label:y,afterLabel:g,beforeLabel:b,labelOptional:x,layout:v,name:E="",onChange:j,onBlur:w,placeholder:S,required:T,value:q,defaultValue:A,style:C,size:N="medium",borderless:R=!1,validation:k,...P}){let{formContextOnChange:L,values:O,errors:M,handleBlur:I,touched:D,fieldLevelValidation:$}=(0,o.useFormContext)();O&&!q&&(q=O[f]),p||(M&&!p&&(p=M[f||E]),p=D&&D[f||E]?p:void 0),(0,s.useEffect)(()=>{k&&$(f,k(q))},[]);let F=(0,i.default)("select"),Y=[F.container];c&&Y.push(c);let z=[F.base];return p&&z.push(F.variants.error),p||z.push(F.variants.standard),h&&z.push(F.with_icon[N]),N&&z.push(F.size[N]),m&&z.push(F.disabled),(0,t.jsx)(a.FormLayout,{label:y,afterLabel:g,beforeLabel:b,labelOptional:x,layout:v,id:f,error:p,descriptionText:d,className:c,style:C,size:N,children:(0,t.jsxs)("div",{className:F.container,children:[(0,t.jsx)("select",{id:f,name:E,"data-size":N,defaultValue:A,autoComplete:e,autoFocus:l,className:z.join(" "),onChange:function(e){j&&j(e),L&&L(e),k&&$(f,k(e.target.value))},onBlur:function(e){I&&I(e),w&&w(e)},ref:_,value:q,disabled:m,required:T,placeholder:S,...P,children:u}),h&&(0,t.jsx)(n.default,{size:N,icon:h}),p&&(0,t.jsx)("div",{className:F.actions_container,children:p&&(0,t.jsx)(r.default,{size:N})}),(0,t.jsx)("span",{className:F.chevron_container,children:(0,t.jsx)("svg",{className:F.chevron,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})})}l.Option=function({value:e,children:s,selected:a}){return(0,t.jsx)("option",{value:e,selected:a,children:s})},l.OptGroup=function({label:e,children:s}){return(0,t.jsx)("optgroup",{label:e,children:s})},e.s(["default",0,l])},749199,e=>{"use strict";var t=e.i(242882),s=e.i(820308),a=e.i(150671),r=e.i(714403),n=e.i(635494),i=e.i(189329);e.s(["default",0,({sql:e,params:o=s.DEFAULT_QUERY_PARAMS,where:l,orderBy:u})=>{let{data:c}=(0,n.useSelectedProjectQuery)(),d=(0,i.useDatabaseSelectorStateSnapshot)(),{data:m}=(0,a.useReadReplicasQuery)({projectRef:c?.ref}),p=(m||[]).find(e=>e.identifier===d.selectedDatabaseId)?.connectionString,h=d.selectedDatabaseId,f="function"==typeof e?e([]):e,{data:_,error:y,isPending:g,isRefetching:b,refetch:x}=(0,t.useQuery)({queryKey:["projects",c?.ref,"db",{...o,sql:f,identifier:h},l,u],queryFn:({signal:e})=>(0,r.executeSql)({projectRef:c?.ref,connectionString:p||c?.connectionString,sql:f},e).then(e=>e.result),enabled:!!f,refetchOnWindowFocus:!1,refetchOnReconnect:!1});return{error:y||("object"==typeof _?_?.error:""),data:_,isLoading:g,isRefetching:b,params:o,runQuery:x,resolvedSql:f}}])},888525,760255,284399,e=>{"use strict";var t=e.i(355901),s=e.i(714403),a=e.i(392491);function r(e=[]){return{hypopg:e.find(e=>"hypopg"===e.name),indexAdvisor:e.find(e=>"index_advisor"===e.name)}}function n(e,t){if(void 0===e||void 0===t)return 0;let s=Number(e),a=Number(t);return s<=0||s<=a?0:(s-a)/s*100}async function i({projectRef:e,connectionString:a,indexStatements:r,onSuccess:n,onError:i}){if(!e){let e=Error("Project ref is required");return i&&i(e),Promise.reject(e)}if(0===r.length){let e=Error("No index statements provided");return i&&i(e),Promise.reject(e)}try{return await (0,s.executeSql)({projectRef:e,connectionString:a,sql:r.join(";\n")+";"}),t.toast.success("Successfully created index"),n&&n(),Promise.resolve()}catch(e){return t.toast.error(`Failed to create index: ${e.message}`),i&&i(e),Promise.reject(e)}}function o(e,t){return!!(t&&e?.index_statements&&e.index_statements.length>0)}function l(e){return e&&0!==e.length?e.filter(e=>{let t=e.match(/ON\s+(?:"?(\w+)"?\.|(\w+)\.)/i);if(!t)return!0;let s=t[1]||t[2];return!s||!a.INTERNAL_SCHEMAS.includes(s.toLowerCase())}):[]}function u(e){if(!e||!e.index_statements)return e??null;let t=l(e.index_statements);return 0===t.length?null:{...e,index_statements:t}}function c(e){if(!e)return!1;let t=e.toLowerCase();return a.INTERNAL_SCHEMAS.some(e=>RegExp(`(?:from|join|update|insert\\s+into|delete\\s+from)\\s+(?:${e}\\.|"${e}"\\.)`,"i").test(t))}e.s(["calculateImprovement",()=>n,"createIndexes",()=>i,"filterProtectedSchemaIndexAdvisorResult",()=>u,"filterProtectedSchemaIndexStatements",()=>l,"getIndexAdvisorExtensions",()=>r,"hasIndexRecommendations",()=>o,"queryInvolvesProtectedSchemas",()=>c],760255);var d=e.i(450972),m=e.i(635494);function p(){let{data:e}=(0,m.useSelectedProjectQuery)(),{data:t}=(0,d.useDatabaseExtensionsQuery)({projectRef:e?.ref,connectionString:e?.connectionString}),{hypopg:s,indexAdvisor:a}=r(t??[]),n=!!s&&!!a,i=n&&null!==s.installed_version&&null!==a.installed_version;return{isIndexAdvisorAvailable:n,isIndexAdvisorEnabled:i}}e.s(["useIndexAdvisorStatus",()=>p],888525);var h=e.i(478902),f=e.i(389959),_=e.i(232520),y=e.i(837710),g=e.i(610144),b=e.i(967052);e.s(["EnableIndexAdvisorButton",0,()=>{let e=(0,b.useTrack)(),{data:s}=(0,m.useSelectedProjectQuery)(),[a,n]=(0,f.useState)(!1),{data:i}=(0,d.useDatabaseExtensionsQuery)({projectRef:s?.ref,connectionString:s?.connectionString}),{hypopg:o,indexAdvisor:l}=r(i),{mutateAsync:u,isPending:c}=(0,g.useDatabaseExtensionEnableMutation)(),p=async()=>{if(void 0===s)return t.toast.error("Project is required");try{o?.installed_version===null&&await u({projectRef:s?.ref,connectionString:s?.connectionString,name:o.name,schema:o?.schema??"extensions",version:o.default_version}),l?.installed_version===null&&await u({projectRef:s?.ref,connectionString:s?.connectionString,name:l.name,schema:l?.schema??"extensions",version:l.default_version}),t.toast.success("Successfully enabled Index Advisor!"),n(!1)}catch(e){t.toast.error(`Failed to enable Index Advisor: ${e.message}`)}};return(0,h.jsxs)(_.AlertDialog,{open:a,onOpenChange:()=>n(!a),children:[(0,h.jsx)(_.AlertDialogTrigger,{asChild:!0,children:(0,h.jsx)(y.Button,{type:"primary",onClick:()=>e("index_advisor_banner_enable_button_clicked"),children:"Enable"})}),(0,h.jsxs)(_.AlertDialogContent,{children:[(0,h.jsxs)(_.AlertDialogHeader,{children:[(0,h.jsx)(_.AlertDialogTitle,{children:"Enable Index Advisor"}),(0,h.jsxs)(_.AlertDialogDescription,{children:["This will enable the ",(0,h.jsx)("code",{className:"text-code-inline",children:"index_advisor"})," and"," ",(0,h.jsx)("code",{className:"text-code-inline",children:"hypopg"})," Postgres extensions so Index Advisor can analyse queries and suggest performance-improving indexes."]})]}),(0,h.jsxs)(_.AlertDialogFooter,{children:[(0,h.jsx)(_.AlertDialogCancel,{children:"Cancel"}),(0,h.jsx)(_.AlertDialogAction,{onClick:t=>{t.preventDefault(),p(),e("index_advisor_dialog_enable_button_clicked")},disabled:c,children:c?"Enabling...":"Enable"})]})]})]})}],284399)},610144,e=>{"use strict";e.i(850036);var t=e.i(53336),s=e.i(38429),a=e.i(356003),r=e.i(355901),n=e.i(667286),i=e.i(78162),o=e.i(714403);async function l({projectRef:e,connectionString:s,schema:a,name:r,version:n,cascade:i=!1,createSchema:l=!1}){let u=new Headers;s&&u.set("x-connection-encrypted",s);let c=(0,t.getEnableDatabaseExtensionSQL)({schema:a,name:r,version:n,cascade:i,createSchema:l}),{result:d}=await (0,o.executeSql)({projectRef:e,connectionString:s,sql:c,queryKey:["extension","create"]});return d}e.s(["useDatabaseExtensionEnableMutation",0,({onSuccess:e,onError:t,...o}={})=>{let u=(0,a.useQueryClient)();return(0,s.useMutation)({mutationFn:e=>l(e),async onSuccess(t,s,a){let{projectRef:r}=s;await Promise.all([u.invalidateQueries({queryKey:n.databaseExtensionsKeys.list(r)}),u.invalidateQueries({queryKey:i.configKeys.upgradeEligibility(r)})]),await e?.(t,s,a)},async onError(e,s,a){void 0===t?r.toast.error(`Failed to enable database extension: ${e.message}`):t(e,s,a)},...o})}])},820308,775159,e=>{"use strict";var t,s,a=e.i(55956),r=((t={}).API="api",t.STORAGE="storage",t.AUTH="auth",t.QUERY_PERFORMANCE="query_performance",t.DATABASE="database",t);e.s(["Presets",()=>r],775159);var n=((s={}).LAST_10_MINUTES="Last 10 minutes",s.LAST_30_MINUTES="Last 30 minutes",s.LAST_60_MINUTES="Last 60 minutes",s.LAST_3_HOURS="Last 3 hours",s.LAST_24_HOURS="Last 24 hours",s.LAST_7_DAYS="Last 7 days",s.LAST_14_DAYS="Last 14 days",s.LAST_28_DAYS="Last 28 days",s);let i=[{text:"Last 10 minutes",calcFrom:()=>(0,a.default)().subtract(10,"minute").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 30 minutes",calcFrom:()=>(0,a.default)().subtract(30,"minute").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 60 minutes",calcFrom:()=>(0,a.default)().subtract(1,"hour").toISOString(),calcTo:()=>(0,a.default)().toISOString(),default:!0,availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 3 hours",calcFrom:()=>(0,a.default)().subtract(3,"hour").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 24 hours",calcFrom:()=>(0,a.default)().subtract(1,"day").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["free","pro","team","enterprise","platform"]},{text:"Last 7 days",calcFrom:()=>(0,a.default)().subtract(7,"day").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["pro","team","enterprise"]},{text:"Last 14 days",calcFrom:()=>(0,a.default)().subtract(14,"day").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["team","enterprise"]},{text:"Last 28 days",calcFrom:()=>(0,a.default)().subtract(28,"day").toISOString(),calcTo:()=>(0,a.default)().toISOString(),availableIn:["team","enterprise"]}],o={iso_timestamp_start:i[0].calcFrom(),iso_timestamp_end:i[0].calcTo()},l=(e,t=!0)=>{if(0===e.length)return"";let s=e.map(e=>{let t=e.key.split("."),s=[t[t.length-2],t[t.length-1]].join("."),a=e.key.includes(".")?s:e.key,r=e.value.toString().includes('"')||e.value.toString().includes("'"),n=!isNaN(Number(e.value)),i=!n&&r?e.value:`'${e.value}'`,o=!n&&String(i).toLowerCase(),l=n?e.value:o;switch(e.compare){case"matches":return`REGEXP_CONTAINS(${a}, ${l})`;case"is":default:return`${a} = ${l}`;case"!=":return`${a} != ${l}`;case">=":return`${a} >= ${l}`;case"<=":return`${a} <= ${l}`;case">":return`${a} > ${l}`;case"<":return`${a} < ${l}`}}).filter(Boolean).join(" AND ");return""===s?"":t?"WHERE "+s:"AND "+s},u={[r.API]:{title:"API",queries:{totalRequests:{queryType:"logs",sql:e=>`
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
  from pg_statio_user_tables;`},unified:{queryType:"db",sql:(e,t,s,a=!1,r=!1,n=1,i=20)=>{let o=(n-1)*i,l=r&&a?o+10*i:o+i,u=a?Math.min(l,500):l;return`
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
          ${null!==u?`limit ${u}`:""}
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
      LIMIT 5;`}}}};e.s(["DEFAULT_QUERY_PARAMS",0,o,"DEPRECATED_REPORTS",0,["total_realtime_ingress","total_rest_options_requests","total_auth_ingress","total_auth_get_requests","total_auth_post_requests","total_auth_patch_requests","total_auth_options_requests","total_storage_options_requests","total_storage_patch_requests","total_options_requests","total_rest_ingress","total_rest_get_requests","total_rest_post_requests","total_rest_patch_requests","total_rest_delete_requests","total_storage_get_requests","total_storage_post_requests","total_storage_delete_requests","total_auth_delete_requests","total_get_requests","total_patch_requests","total_post_requests","total_ingress","total_delete_requests"],"EDGE_FUNCTION_REGIONS",0,[{key:"ap-northeast-1",label:"Tokyo"},{key:"ap-northeast-2",label:"Seoul"},{key:"ap-south-1",label:"Mumbai"},{key:"ap-southeast-1",label:"Singapore"},{key:"ap-southeast-2",label:"Sydney"},{key:"ca-central-1",label:"Canada Central"},{key:"us-east-1",label:"N. Virginia"},{key:"us-west-1",label:"N. California"},{key:"us-west-2",label:"Oregon"},{key:"eu-central-1",label:"Frankfurt"},{key:"eu-west-1",label:"Ireland"},{key:"eu-west-2",label:"London"},{key:"eu-west-3",label:"Paris"},{key:"sa-east-1",label:"São Paulo"}],"LAYOUT_COLUMN_COUNT",0,2,"PRESET_CONFIG",0,u,"REPORTS_DATEPICKER_HELPERS",0,i,"REPORT_DATERANGE_HELPER_LABELS",()=>n,"generateRegexpWhere",0,l],820308)},384429,e=>{"use strict";var t=e.i(698175);e.s(["Select",()=>t.default])},419524,e=>{"use strict";let t=(0,e.i(388019).default)("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);e.s(["AlignLeft",()=>t],419524)},199327,e=>{"use strict";let t=(0,e.i(388019).default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>t],199327)},937357,e=>{"use strict";e.s(["databaseIndexesKeys",0,{list:(e,t)=>["projects",e,"database-indexes",t].filter(Boolean)}])},686255,e=>{"use strict";e.s(["enumeratedTypesKeys",0,{list:e=>["projects",e,"enumerated-types"]}])},867467,e=>{"use strict";var t=e.i(389959);function s(e){let s=(0,t.useRef)(),a=s.current!==e;return(0,t.useEffect)(()=>{s.current=e}),a}function a(e){let s=(0,t.useRef)(),a=s.current!==e;return s.current=e,a}e.s(["useChanged",()=>s,"useChangedSync",()=>a])},155482,e=>{"use strict";var t=e.i(248593),s=e.i(242882),a=e.i(686255),r=e.i(234745);async function n({projectRef:e,connectionString:s},a){if(!e)throw Error("projectRef is required");let n=new Headers;s&&n.set("x-connection-encrypted",s);let{data:i,error:o}=await (0,r.get)("/platform/pg-meta/{ref}/types",{params:{header:{"x-connection-encrypted":s,"x-pg-application-name":t.DEFAULT_PLATFORM_APPLICATION_NAME},path:{ref:e}},headers:Object.fromEntries(n),signal:a});return o&&(0,r.handleError)(o),i}e.s(["useEnumeratedTypesQuery",0,({projectRef:e,connectionString:t},{enabled:r=!0,...i}={})=>(0,s.useQuery)({queryKey:a.enumeratedTypesKeys.list(e),queryFn:({signal:s})=>n({projectRef:e,connectionString:t},s),enabled:r&&void 0!==e,...i})])},691337,e=>{"use strict";var t=e.i(850036),s=e.i(38429),a=e.i(356003),r=e.i(355901),n=e.i(509847),i=e.i(714403);async function o({projectRef:e,connectionString:s,payload:a}){let r=new Headers;s&&r.set("x-connection-encrypted",s);let{sql:n}=t.default.policies.create(a),{result:o}=await (0,i.executeSql)({projectRef:e,connectionString:s,sql:n,queryKey:["policy","create"]});return o}e.s(["createDatabasePolicy",()=>o,"useDatabasePolicyCreateMutation",0,({onSuccess:e,onError:t,...i}={})=>{let l=(0,a.useQueryClient)();return(0,s.useMutation)({mutationFn:e=>o(e),async onSuccess(t,s,a){let{projectRef:r}=s;await l.invalidateQueries({queryKey:n.databasePoliciesKeys.list(r)}),await e?.(t,s,a)},async onError(e,s,a){void 0===t?r.toast.error(`Failed to create database policy: ${e.message}`):t(e,s,a)},...i})}])},999918,e=>{"use strict";let t=(0,e.i(388019).default)("ShieldOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);e.s(["ShieldOff",()=>t],999918)},181827,e=>{"use strict";var t=e.i(478902),s=e.i(156054);e.s(["MonacoEditor",0,({width:e,height:a,value:r,language:n,readOnly:i=!1,onChange:o,onMount:l})=>(0,t.jsx)(s.default,{width:e,height:a||"200px",theme:"supabase",wrapperProps:{className:"grid-monaco-editor-container"},className:"grid-monaco-editor",defaultLanguage:n||"plaintext",defaultValue:r,onChange:o,onMount:function(e){e.changeViewZones(e=>{e.addZone({afterLineNumber:0,heightInPx:4,domNode:document.createElement("div")})});let t=e.getModel().getPositionAt(r?.length);e.setPosition(t),setTimeout(()=>{e?.focus()},0),l&&l(e)},options:{readOnly:i,tabSize:2,fontSize:13,minimap:{enabled:!1},glyphMargin:!1,folding:!1,lineNumbers:"off",lineNumbersMinChars:0,scrollBeyondLastLine:!1,wordWrap:"on",unusualLineTerminators:"off"}})])},554222,e=>{"use strict";var t=e.i(478902),s=e.i(389959),a=e.i(355901),r=e.i(171997),n=e.i(539013),i=e.i(647307),o=e.i(635494);e.s(["SchemaEditor",0,({visible:e,onSuccess:l,closePanel:u})=>{let{data:c}=(0,o.useSelectedProjectQuery)(),[d,m]=(0,s.useState)({name:void 0}),[p,h]=(0,s.useState)(""),{mutateAsync:f,isPending:_}=(0,i.useSchemaCreateMutation)();(0,s.useEffect)(()=>{e&&(h(""),m({name:void 0}))},[e]);let y=async()=>{let e={};if(0===p.length&&(e.name="Please provide a name for your schema"),Object.keys(e).length>0)return m(e);if(void 0===c)return console.error("Project is required");try{await f({projectRef:c.ref,connectionString:c.connectionString,name:p}),l(p),a.toast.success(`Successfully created schema "${p}"`)}catch(e){a.toast.error(`Failed to create schema: ${e}`)}};return(0,t.jsx)(n.SidePanel,{size:"medium",visible:e,header:"Create a new schema",className:"transition-all duration-100 ease-in",onCancel:u,onConfirm:y,loading:_,cancelText:"Cancel",confirmText:"Save",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.SidePanel.Content,{children:(0,t.jsx)("div",{className:"space-y-10 py-6",children:(0,t.jsx)(r.Input,{label:"Schema name",layout:"vertical",type:"text",error:d?.name,value:p,onChange:e=>h(e.target.value)})})})})},"SchemaEditor")}])},170286,(e,t,s)=>{e.e,t.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,r=/\d\d?/,n=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e*=1)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e||"Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),s=60*t[1]+(+t[2]||0);return 0===s?0:"+"===t[0]?-s:s}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var s,a=i.meridiem;if(a){for(var r=1;r<=24;r+=1)if(e.indexOf(a(r,0,t))>-1){s=r>12;break}}else s=e===(t?"pm":"PM");return s},m={A:[n,function(e){this.afternoon=d(e,!1)}],a:[n,function(e){this.afternoon=d(e,!0)}],Q:[s,function(e){this.month=3*(e-1)+1}],S:[s,function(e){this.milliseconds=100*e}],SS:[a,function(e){this.milliseconds=10*e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[a,l("day")],Do:[n,function(e){var t=i.ordinal,s=e.match(/\d+/);if(this.day=s[0],t)for(var a=1;a<=31;a+=1)t(a).replace(/\[|\]/g,"")===e&&(this.day=a)}],w:[r,l("week")],ww:[a,l("week")],M:[r,l("month")],MM:[a,l("month")],MMM:[n,function(e){var t=c("months"),s=(c("monthsShort")||t.map(function(e){return e.slice(0,3)})).indexOf(e)+1;if(s<1)throw Error();this.month=s%12||s}],MMMM:[n,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[a,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:u,ZZ:u};return function(s,a,r){r.p.customParseFormat=!0,s&&s.parseTwoDigitYear&&(o=s.parseTwoDigitYear);var n=a.prototype,l=n.parse;n.parse=function(s){var a=s.date,n=s.utc,o=s.args;this.$u=n;var u=o[1];if("string"==typeof u){var c=!0===o[2],d=!0===o[3],p=o[2];d&&(p=o[2]),i=this.$locale(),!c&&p&&(i=r.Ls[p]),this.$d=function(s,a,r,n){try{if(["x","X"].indexOf(a)>-1)return new Date(("X"===a?1e3:1)*s);var o=(function(s){var a,r;a=s,r=i&&i.formats;for(var n=(s=a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,s,a){var n=a&&a.toUpperCase();return s||r[a]||e[a]||r[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,s){return t||s.slice(1)})})).match(t),o=n.length,l=0;l<o;l+=1){var u=n[l],c=m[u],d=c&&c[0],p=c&&c[1];n[l]=p?{regex:d,parser:p}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},s=0,a=0;s<o;s+=1){var r=n[s];if("string"==typeof r)a+=r.length;else{var i=r.regex,l=r.parser,u=e.slice(a),c=i.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var s=e.hours;t?s<12&&(e.hours+=12):12===s&&(e.hours=0),delete e.afternoon}}(t),t}})(a)(s),l=o.year,u=o.month,c=o.day,d=o.hours,p=o.minutes,h=o.seconds,f=o.milliseconds,_=o.zone,y=o.week,g=new Date,b=c||(l||u?1:g.getDate()),x=l||g.getFullYear(),v=0;l&&!u||(v=u>0?u-1:g.getMonth());var E,j=d||0,w=p||0,S=h||0,T=f||0;return _?new Date(Date.UTC(x,v,b,j,w,S,T+60*_.offset*1e3)):r?new Date(Date.UTC(x,v,b,j,w,S,T)):(E=new Date(x,v,b,j,w,S,T),y&&(E=n(E).week(y).toDate()),E)}catch(e){return new Date("")}}(a,u,n,r),this.init(),p&&!0!==p&&(this.$L=this.locale(p).$L),(c||d)&&a!=this.format(u)&&(this.$d=new Date("")),i={}}else if(u instanceof Array)for(var h=u.length,f=1;f<=h;f+=1){o[1]=u[f-1];var _=r.apply(this,o);if(_.isValid()){this.$d=_.$d,this.$L=_.$L,this.init();break}f===h&&(this.$d=new Date(""))}else l.call(this,s)}}}()},102703,e=>{"use strict";var t=e.i(478902),s=e.i(17203),a=e.i(180148),r=e.i(699879),n=e.i(462813),i=e.i(389959),o=e.i(837710);let l=(0,i.forwardRef)(({icon:e,title:l,description:u,url:c,urlLabel:d="Read more",defaultVisibility:m=!1,hideCollapse:p=!1,button:h,className:f="",block:_=!1},y)=>{let[g,b]=(0,i.useState)(m);return(0,t.jsx)("div",{ref:y,role:"alert",className:`${_?"block w-full":""}
      block w-full rounded-md border bg-surface-300/25 py-3 ${f}`,children:(0,t.jsxs)("div",{className:"flex flex-col px-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex w-full space-x-3 items-center",children:[e&&(0,t.jsx)("span",{className:"text-foreground-lighter",children:e}),(0,t.jsx)("div",{className:"flex-grow",children:(0,t.jsx)("h5",{className:"text-foreground",children:l})})]}),u&&!p?(0,t.jsx)("div",{className:"cursor-pointer text-foreground-lighter",onClick:()=>b(!g),children:g?(0,t.jsx)(r.Minimize2,{size:14,strokeWidth:1.5}):(0,t.jsx)(a.Maximize2,{size:14,strokeWidth:1.5})}):null]}),(u||c||h)&&(0,t.jsxs)("div",{className:`flex flex-col space-y-3 overflow-hidden transition-all ${g?"mt-3":""}`,style:{maxHeight:500*!!g},children:[(0,t.jsx)("div",{className:"text-foreground-light text-sm",children:u}),c&&(0,t.jsx)("div",{children:(0,t.jsx)(o.Button,{asChild:!0,type:"default",icon:(0,t.jsx)(s.ExternalLink,{}),children:(0,t.jsx)(n.default,{href:c,target:"_blank",rel:"noreferrer",children:d})})}),h&&(0,t.jsx)("div",{children:h})]})]})})});l.displayName="InformationBox",e.s(["default",0,l])},580984,e=>{"use strict";var t=e.i(761755),s=e.i(10429);e.s(["useDataApiGrantTogglesEnabled",0,()=>{let e=(0,t.usePHFlag)("tableEditorApiAccessToggle");return!!s.IS_TEST_ENV||!!e}])},768441,e=>{"use strict";e.i(850036);var t=e.i(757489),s=e.i(180141),a=e.i(818135),r=e.i(714403);async function n({projectRef:e,connectionString:s,schema:a},n){if(!e)throw Error("projectRef is required");let i=(0,t.getDefaultPrivilegesStateSql)({schema:a}),{result:o}=await (0,r.executeSql)({projectRef:e,connectionString:s,sql:i,queryKey:["default-privileges-state"]},n);return 3===o[0].grant_count}e.s(["defaultPrivilegesQueryOptions",0,({projectRef:e,connectionString:t,schema:r},{enabled:i=!0}={})=>(0,s.queryOptions)({queryKey:a.privilegeKeys.defaultPrivileges(e,r),queryFn:({signal:s})=>n({projectRef:e,connectionString:t,schema:r},s),enabled:i&&void 0!==e})])},457065,e=>{"use strict";var t=e.i(478902),s=e.i(585102),a=e.i(389959),r=e.i(753515),n=e.i(938933),i=e.i(140449);e.s(["default",0,function({disabled:e,id:o="",name:l="",layout:u="flex",error:c,descriptionText:d,label:m,afterLabel:p,beforeLabel:h,labelOptional:f,onChange:_,onBlur:y,defaultChecked:g,checked:b,className:x,align:v="left",size:E="medium",validation:j,labelLayout:w,...S}){let T=(0,n.default)("toggle"),{formContextOnChange:q,values:A,errors:C,handleBlur:N,touched:R,fieldLevelValidation:k}=(0,i.useFormContext)();A&&!b&&(b=A[o||l]);let[P,L]=(0,a.useState)((g||b)??!1),O=b??P;(0,a.useEffect)(()=>{L(O)},[]),c||(C&&!c&&(c=C[o||l]),c=R&&R[o||l]?c:void 0);let M=[T.base,T.handle_container[E]];O&&M.push(T.active);let I=[T.handle.base,T.handle[E]];return O&&I.push(T.handle_active[E]),(0,t.jsx)(r.FormLayout,{className:x,label:m,afterLabel:p,beforeLabel:h,labelOptional:f,layout:u,id:o,error:c,align:v,descriptionText:d,size:E,labelLayout:w,nonBoxInput:!0,children:(0,t.jsx)("button",{type:"button",id:o,name:l,className:(0,s.default)(...M,e&&"opacity-50 cursor-default"),onClick:function(){_&&_(!O),L(!P);let e={};e.target={type:"checkbox",name:l,id:o,value:!O,checked:!O},q&&q(e),j&&k(o,j(!P))},disabled:e,onBlur:function(e){setTimeout(()=>{N&&N(e)},100),y&&y(e)},...S,children:(0,t.jsx)("span",{"aria-hidden":"true",className:I.join(" ")})})})}])},905596,e=>{"use strict";var t=e.i(457065);e.s(["Toggle",()=>t.default])},438756,(e,t,s)=>{t.exports=function(e){return null===e}},577846,(e,t,s)=>{var a=e.r(714530);t.exports=function(e,t){return a(t,function(t){return e[t]})}},943262,(e,t,s)=>{var a=e.r(577846),r=e.r(375493);t.exports=function(e){return null==e?[]:a(e,r(e))}},333990,(e,t,s)=>{var a=e.r(491761),r=e.r(775484),n=e.r(141892),i=e.r(684912),o=e.r(943262),l=Math.max;t.exports=function(e,t,s,u){e=r(e)?e:o(e),s=s&&!u?i(s):0;var c=e.length;return s<0&&(s=l(c+s,0)),n(e)?s<=c&&e.indexOf(t,s)>-1:!!c&&a(e,t,s)>-1}},291969,e=>{"use strict";let t=(0,e.i(388019).default)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>t],291969)},321605,25912,e=>{"use strict";var t=e.i(248593),s=e.i(242882);let a={list:e=>["projects",e,"database-publications"]};e.s(["databasePublicationsKeys",0,a],25912);var r=e.i(234745);async function n({projectRef:e,connectionString:s},a){if(!e)throw Error("projectRef is required");let n=new Headers;s&&n.set("x-connection-encrypted",s);let{data:i,error:o}=await (0,r.get)("/platform/pg-meta/{ref}/publications",{params:{header:{"x-connection-encrypted":s,"x-pg-application-name":t.DEFAULT_PLATFORM_APPLICATION_NAME},path:{ref:e}},headers:n,signal:a});return o&&(0,r.handleError)(o),i}e.s(["useDatabasePublicationsQuery",0,({projectRef:e,connectionString:t},{enabled:r=!0,...i}={})=>(0,s.useQuery)({queryKey:a.list(e),queryFn:({signal:s})=>n({projectRef:e,connectionString:t},s),enabled:r&&void 0!==e,...i})],321605)},587768,e=>{"use strict";var t=e.i(850036),s=e.i(38429),a=e.i(356003),r=e.i(355901),n=e.i(25912),i=e.i(714403);async function o({projectRef:e,connectionString:s,id:a,tables:r,publish_insert:n,publish_update:o,publish_delete:l,publish_truncate:u}){let{sql:c}=t.default.publications.update(a,{tables:r,publish_insert:n,publish_update:o,publish_delete:l,publish_truncate:u}),{result:d}=await (0,i.executeSql)({projectRef:e,connectionString:s,sql:c,queryKey:["publication","update",a]});return d}e.s(["useDatabasePublicationUpdateMutation",0,({onSuccess:e,onError:t,...i}={})=>{let l=(0,a.useQueryClient)();return(0,s.useMutation)({mutationFn:e=>o(e),async onSuccess(t,s,a){let{projectRef:r}=s;await l.invalidateQueries({queryKey:n.databasePublicationsKeys.list(r)}),await e?.(t,s,a)},async onError(e,s,a){void 0===t?r.toast.error(`Failed to update database publication: ${e.message}`):t(e,s,a)},...i})}])},973512,e=>{"use strict";var t=e.i(478902),s=e.i(802715),a=e.i(389959),r=e.i(837710),n=e.i(788070),i=e.i(680576);e.s(["ActionBar",0,({loading:e=!1,disableApply:o=!1,hideApply:l=!1,children:u,applyButtonLabel:c="Apply",backButtonLabel:d="Back",applyFunction:m,closePanel:p=s.default,formId:h,visible:f=!0})=>{let[_,y]=(0,a.useState)(!1),g=(0,a.useCallback)(async()=>{y(!0),await new Promise(e=>m?.(e)),y(!1)},[m]),b=(0,a.useCallback)(t=>{if(_||e||o||l)return;let s=document.activeElement;if(s?.tagName!=="TEXTAREA"||t.metaKey||t.ctrlKey)if(t.preventDefault(),t.stopPropagation(),h){let e=document.getElementById(h);e&&e.requestSubmit()}else m&&g()},[_,e,o,l,h,m,g]);return(0,i.useHotKey)(b,"Enter",{enabled:f}),(0,t.jsxs)("div",{className:"flex w-full items-center gap-3 border-t border-default px-3 py-4",children:[u,(0,t.jsxs)("div",{className:"flex items-center gap-3 ml-auto",children:[(0,t.jsx)(r.Button,{type:"default",htmlType:"button",onClick:p,disabled:_||e,children:d}),void 0!==m?(0,t.jsx)(r.Button,{onClick:g,disabled:o||_||e,loading:_||e,iconRight:_||e?void 0:(0,t.jsx)(n.KeyboardShortcut,{keys:["Meta","Enter"],variant:"inline"}),children:c}):l?(0,t.jsx)("div",{}):(0,t.jsx)(r.Button,{disabled:e||o,loading:e,"data-testid":"action-bar-save-row",htmlType:"submit",form:h,iconRight:e?void 0:(0,t.jsx)(n.KeyboardShortcut,{keys:["Meta","Enter"],variant:"inline"}),children:c})]})]})}])},272299,257320,e=>{"use strict";var t=e.i(388019);let s=(0,t.default)("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);e.s(["ToggleRight",()=>s],272299);let a=(0,t.default)("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);e.s(["Type",()=>a],257320)},507648,(e,t,s)=>{var a=e.r(203941),r=e.r(297926),n=e.r(615573),i=e.r(145948);t.exports=function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),s=arguments[0],o=e;o--;)t[o-1]=arguments[o];return a(i(s)?n(s):[s],r(t,1))}},707409,e=>{"use strict";var t=e.i(507648),s=e.i(827047);let a=["int2","int4","int8","float4","float8","numeric","double precision"],r=["json","jsonb"],n=["text","varchar"],i=["timestamp","timestamptz"],o=["date"],l=["time","timetz"],u=(0,t.default)(i,o,l),c=["uuid","bool","vector","bytea"],d=(0,s.default)((0,t.default)(a,r,n,u,c));e.s(["DATETIME_TYPES",0,u,"DATE_TYPES",0,o,"JSON_TYPES",0,r,"NUMERICAL_TYPES",0,a,"OTHER_DATA_TYPES",0,c,"POSTGRES_DATA_TYPES",0,d,"POSTGRES_DATA_TYPE_OPTIONS",0,[{name:"int2",description:"Signed two-byte integer",type:"number"},{name:"int4",description:"Signed four-byte integer",type:"number"},{name:"int8",description:"Signed eight-byte integer",type:"number"},{name:"float4",description:"Single precision floating-point number (4 bytes)",type:"number"},{name:"float8",description:"Double precision floating-point number (8 bytes)",type:"number"},{name:"numeric",description:"Exact numeric of selectable precision",type:"number"},{name:"json",description:"Textual JSON data",type:"json"},{name:"jsonb",description:"Binary JSON data, decomposed",type:"json"},{name:"text",description:"Variable-length character string",type:"text"},{name:"varchar",description:"Variable-length character string",type:"text"},{name:"uuid",description:"Universally unique identifier",type:"text"},{name:"date",description:"Calendar date (year, month, day)",type:"time"},{name:"time",description:"Time of day (no time zone)",type:"time"},{name:"timetz",description:"Time of day, including time zone",type:"time"},{name:"timestamp",description:"Date and time (no time zone)",type:"time"},{name:"timestamptz",description:"Date and time, including time zone",type:"time"},{name:"bool",description:"Logical boolean (true/false)",type:"bool"},{name:"bytea",description:"Variable-length binary string",type:"others"}],"RECOMMENDED_ALTERNATIVE_DATA_TYPE",0,{varchar:{alternative:"text",reference:"https://wiki.postgresql.org/wiki/Don't_Do_This#Don.27t_use_varchar.28n.29_by_default"},json:{alternative:"jsonb",reference:"https://www.postgresql.org/docs/current/datatype-json.html"},timetz:{alternative:"timestamptz",reference:"https://wiki.postgresql.org/wiki/Don't_Do_This#Don.27t_use_timetz"},timestamp:{alternative:"timestamptz",reference:"https://wiki.postgresql.org/wiki/Don't_Do_This#Don.27t_use_timestamp_.28without_time_zone.29"}},"TEXT_TYPES",0,n,"TIMESTAMP_TYPES",0,i,"TIME_TYPES",0,l])},647307,e=>{"use strict";var t=e.i(850036),s=e.i(38429),a=e.i(356003),r=e.i(355901),n=e.i(801834),i=e.i(714403);async function o({name:e,projectRef:s,connectionString:a}){let r=t.default.schemas.create({name:e,owner:"postgres"}).sql,{result:n}=await (0,i.executeSql)({projectRef:s,connectionString:a,sql:r,queryKey:["schema","create"]});return n}e.s(["useSchemaCreateMutation",0,({onSuccess:e,onError:t,...i}={})=>{let l=(0,a.useQueryClient)();return(0,s.useMutation)({mutationFn:e=>o(e),async onSuccess(t,s,a){let{projectRef:r}=s;await (0,n.invalidateSchemasQuery)(l,r),await e?.(t,s,a)},async onError(e,s,a){void 0===t?r.toast.error(`Failed to create schema: ${e.message}`):t(e,s,a)},...i})}])},433857,e=>{"use strict";let t=(0,e.i(388019).default)("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);e.s(["ListPlus",()=>t],433857)},101369,e=>{"use strict";var t=e.i(478902),s=e.i(843778);let a=({max:e=100,value:a=0,barClass:r="bg-foreground",bgClass:n="",type:i="vertical",borderClass:o="",labelBottom:l="",labelBottomClass:u="tabular-nums",labelTop:c="",labelTopClass:d=""})=>{if("horizontal"===i){let i=Number(a/e*100),m=`${i}%`,p=l||c;return(0,t.jsxs)("div",{className:"flex flex-col w-full",children:[p&&(0,t.jsxs)("div",{className:"flex align-baseline justify-between pb-1 space-x-8",children:[(0,t.jsx)("p",{className:(0,s.cn)("text-foreground text-sm truncate capitalize-sentence",c.length>0&&"max-w-[75%]",u),children:l}),(0,t.jsx)("p",{className:(0,s.cn)("text-foreground-light text-sm",d),children:c})]}),(0,t.jsx)("div",{className:`relative rounded h-1 overflow-hidden w-full border p-0 ${n||"bg-surface-400"} ${o||"border-none"}`,children:(0,t.jsx)("div",{className:`absolute rounded inset-x-0 bottom-0 h-1 ${r} transition-all`,style:{width:m}})})]})}{let s=Number(a/e*35);return s<2&&(s=2),(0,t.jsx)("div",{className:`relative rounded w-5 overflow-hidden border p-1 ${n||"bg-gray-400"} ${o||"border-none"}`,style:{height:35},children:(0,t.jsx)("div",{className:`absolute inset-x-0 bottom-0 w-5 ${r}`,style:{height:s}})})}};e.s(["SparkBar",0,a,"default",0,a])},615573,(e,t,s)=>{t.exports=function(e,t){var s=-1,a=e.length;for(t||(t=Array(a));++s<a;)t[s]=e[s];return t}},271963,(e,t,s)=>{var a=e.r(406305),r=e.r(422367),n=Object.prototype.hasOwnProperty;t.exports=function(e,t,s){var i=e[t];n.call(e,t)&&r(i,s)&&(void 0!==s||t in e)||a(e,t,s)}},493967,(e,t,s)=>{t.exports=function(e){var t=[];if(null!=e)for(var s in Object(e))t.push(s);return t}},119919,(e,t,s)=>{var a=e.r(377882),r=e.r(85057),n=e.r(493967),i=Object.prototype.hasOwnProperty;t.exports=function(e){if(!a(e))return n(e);var t=r(e),s=[];for(var o in e)"constructor"==o&&(t||!i.call(e,o))||s.push(o);return s}},409516,(e,t,s)=>{var a=e.r(312069),r=e.r(119919),n=e.r(775484);t.exports=function(e){return n(e)?a(e,!0):r(e)}},569033,e=>{"use strict";e.i(128328);var t=e.i(947748),s=e.i(124416);let a=()=>{let[e,a]=(0,s.useLocalStorageQuery)(t.LOCAL_STORAGE_KEYS.UI_PREVIEW_INLINE_EDITOR,!1);return{inlineEditorEnabled:e??!1,setInlineEditorEnabled:a}},r=()=>{let[e,a]=(0,s.useLocalStorageQuery)(t.LOCAL_STORAGE_KEYS.UI_PREVIEW_QUEUE_OPERATIONS,!1);return{isQueueOperationsEnabled:e??!1,setIsQueueOperationsEnabled:a}};e.s(["useIsInlineEditorEnabled",0,()=>{let{inlineEditorEnabled:e}=a();return e??!1},"useIsInlineEditorSetting",0,a,"useIsQueueOperationsEnabled",0,()=>{let{isQueueOperationsEnabled:e}=r();return e??!1},"useIsQueueOperationsSetting",0,r])},495486,e=>{"use strict";let t=(0,e.i(388019).default)("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);e.s(["Table",()=>t],495486)},64102,e=>{"use strict";var t=e.i(478902),s=e.i(389959),a=e.i(843778);let r=()=>(0,t.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[(0,t.jsx)("div",{className:"shimmering-loader h-2 w-1/3 rounded"}),(0,t.jsx)("div",{className:"flex flex-col justify-between space-y-2",children:(0,t.jsx)("div",{className:"shimmering-loader h-[34px] w-2/3 rounded"})})]});e.s(["FormSection",0,({children:e,id:s,header:a,disabled:r,className:n})=>{let i=["grid grid-cols-12 gap-6 px-card py-4 md:py-8",`${r?" opacity-30":" opacity-100"}`,`${n}`];return(0,t.jsxs)("div",{id:s,className:i.join(" "),children:[a,e]})},"FormSectionContent",0,({children:e,loading:a=!0,loaders:n,fullWidth:i,className:o})=>(0,t.jsx)("div",{className:`
        relative col-span-12 flex flex-col gap-6 @lg:col-span-7
        ${i&&"!col-span-12"}
        ${o}
      `,children:a?n?Array(n).fill(0).map((e,s)=>(0,t.jsx)(r,{},s)):s.Children.map(e,(e,s)=>(0,t.jsx)(r,{},s)):e}),"FormSectionLabel",0,({children:e,className:s="",description:r})=>void 0!==r?(0,t.jsxs)("div",{className:(0,a.cn)("flex flex-col space-y-2 col-span-12 lg:col-span-5",s),children:[(0,t.jsx)("label",{className:"text-foreground text-sm",children:e}),r]}):(0,t.jsx)("label",{className:`text-foreground col-span-12 text-sm lg:col-span-5 ${s}`,children:e})])},296074,(e,t,s)=>{var a=e.r(297926);t.exports=function(e){return(null==e?0:e.length)?a(e,1):[]}},984427,e=>{"use strict";var t=e.i(478902),s=e.i(172650),a=e.i(296074),r=e.i(370410),n=e.i(389959),i=e.i(753515),o=e.i(440401),l=e.i(701823),u=e.i(938933),c=e.i(843778),d=e.i(140449);let m=(0,n.createContext)({onChange:e=>{},selected:void 0});function p({children:e,className:r,buttonClassName:p,descriptionText:h,error:f,icon:_,id:y="",name:g="",label:b,labelOptional:x,layout:v,value:E,onChange:j,onFocus:w,onBlur:S,style:T,size:q="medium",defaultValue:A,validation:C,disabled:N,optionsWidth:R}){let[k,P]=(0,n.useState)(void 0),[L,O]=(0,n.useState)({}),M=(0,u.default)("listbox"),I=(0,n.useRef)(null),{formContextOnChange:D,values:$,errors:F,handleBlur:Y,touched:z,fieldLevelValidation:K}=(0,d.useFormContext)();$&&!E&&(E=$[y||g],A=$[y||g]),f||(F&&!f&&(f=F[y||g]),f=z&&z[y||g]?f:void 0),(0,n.useEffect)(()=>{void 0!==E&&P(E)},[E]),(0,n.useEffect)(()=>{function e(){document.documentElement.style.setProperty("--width-listbox",`${R||I.current?.offsetWidth}px`)}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,n.useEffect)(()=>{let t=(0,a.default)(e);function s(e){return t.find(t=>t.props.value===e)}if(E){P(E);let e=s(E);O(e?.props?e.props:void 0);return}if(k){let e=s(k);O(e?.props?e.props:void 0);return}if(!A)return void O(t[0]?.props);{P(A);let e=s(k);O(e?.props?e.props:void 0);return}},[k]);let Q=[M.container,M.base,p],U=[M.addOnBefore];return f&&Q.push(M.variants.error),f||Q.push(M.variants.standard),_&&U.push(M.with_icon[q]),q&&Q.push(M.size[q]),N&&Q.push(M.disabled),(0,t.jsx)(i.FormLayout,{label:b,labelOptional:x,layout:v,id:y,error:f,descriptionText:h,className:r,style:T,size:q,children:(0,t.jsxs)(s.Root,{children:[(0,t.jsx)(s.Trigger,{asChild:!0,disabled:N,children:(0,t.jsxs)("button",{"data-size":q,ref:I,className:(0,c.cn)(Q),onBlur:function(e){Y&&Y(e),S&&S(e)},onFocus:w,name:g,id:y,children:[(0,t.jsxs)("span",{className:(0,c.cn)(U),children:[_&&(0,t.jsx)(l.default,{size:q,icon:_}),L?.addOnBefore&&(0,t.jsx)(L.addOnBefore,{}),(0,t.jsx)("span",{className:M.label,children:L?.label})]}),(0,t.jsx)("span",{className:M.chevron_container,children:(0,t.jsx)("svg",{className:M.chevron,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})}),f&&(0,t.jsx)("div",{className:M.actions_container,children:f&&(0,t.jsx)(o.default,{size:q})})]})}),(0,t.jsx)(s.Content,{sideOffset:6,loop:!0,side:"bottom",align:"center",className:M.options_container,children:(0,t.jsx)("div",{children:(0,t.jsx)(m.Provider,{value:{onChange:function(e){j&&j(e),P(e);let t={};t.target={type:"select",name:g,id:y,value:e,checked:void 0},D&&D(t),C&&K(y,C(e))},selected:k},children:e})})})]})})}p.Option=function({id:e,value:a,label:n,disabled:i=!1,children:o,className:l="",addOnBefore:d}){let p=(0,u.default)("listbox");return(0,t.jsx)(m.Consumer,{children:({onChange:n,selected:u})=>{let m=u===a;return(0,t.jsxs)(s.Item,{className:(0,c.cn)(p.option,m?p.option_active:" ",i?p.option_disabled:" ",l),onSelect:()=>i?{}:n(a),children:[(0,t.jsxs)("div",{className:p.option_inner,children:[d&&d({active:m,selected:u}),(0,t.jsx)("span",{children:"function"==typeof o?o({active:m,selected:u}):o})]}),m?(0,t.jsx)("span",{className:(0,c.cn)(p.option_check,m?p.option_check_active:""),children:(0,t.jsx)(r.Check,{className:p.option_check_icon,"aria-hidden":"true"})}):null]},e)}})},e.s(["default",0,p],984427)},331077,e=>{"use strict";var t=e.i(984427);e.s(["Listbox",()=>t.default])}]);

//# debugId=53d98cc5-56d7-c468-274f-f364ae70eee6
//# sourceMappingURL=d38e8a7ab9cae6c5.js.map