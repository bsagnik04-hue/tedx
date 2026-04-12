;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="957b0c24-8fd0-ae8a-a6c5-431ae107300e")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,479084,e=>{"use strict";let t=new Set(["AES128","AES256","ALL","ALLOWOVERWRITE","ANALYSE","ANALYZE","AND","ANY","ARRAY","AS","ASC","ASYMMETRIC","AUTHORIZATION","BACKUP","BETWEEN","BIGINT","BINARY","BIT","BLANKSASNULL","BOOLEAN","BOTH","BYTEDICT","CASE","CAST","CHAR","CHARACTER","CHECK","COALESCE","COLLATE","COLLATION","COLUMN","CONCURRENTLY","CONSTRAINT","CREATE","CREDENTIALS","CROSS","CURRENT_CATALOG","CURRENT_DATE","CURRENT_ROLE","CURRENT_SCHEMA","CURRENT_TIME","CURRENT_TIMESTAMP","CURRENT_USER_ID","CURRENT_USER","DEC","DECIMAL","DEFAULT","DEFERRABLE","DEFLATE","DEFRAG","DELETE","DELTA","DELTA32K","DESC","DISABLE","DISTINCT","DO","ELSE","EMPTYASNULL","ENABLE","ENCODE","ENCRYPT","ENCRYPTION","END","EXCEPT","EXISTS","EXPLICIT","EXTRACT","FALSE","FETCH","FLOAT","FOR","FOREIGN","FREEZE","FROM","FULL","GLOBALDICT256","GLOBALDICT64K","GRANT","GREATEST","GROUP","GROUPING","GZIP","HAVING","IDENTITY","IGNORE","ILIKE","IN","INITIALLY","INNER","INOUT","INSERT","INT","INTEGER","INTERSECT","INTERVAL","INTO","IS","ISNULL","JOIN","JSON_ARRAY","JSON_ARRAYAGG","JSON_EXISTS","JSON_OBJECT","JSON_OBJECTAGG","JSON_QUERY","JSON_SCALAR","JSON_SERIALIZE","JSON_TABLE","JSON_VALUE","JSON","LATERAL","LEADING","LEAST","LEFT","LIKE","LIMIT","LOCALTIME","LOCALTIMESTAMP","LUN","LUNS","LZO","LZOP","MERGE_ACTION","MINUS","MOSTLY13","MOSTLY32","MOSTLY8","NATIONAL","NATURAL","NCHAR","NEW","NONE","NORMALIZE","NOT","NOTNULL","NULL","NULLIF","NULLS","NUMERIC","OFF","OFFLINE","OFFSET","OLD","ON","ONLY","OPEN","OR","ORDER","OUT","OUTER","OVERLAPS","OVERLAY","PARALLEL","PARTITION","PERCENT","PLACING","POSITION","PRECISION","PRIMARY","RAW","READRATIO","REAL","RECOVER","REFERENCES","REJECTLOG","RESORT","RESTORE","RETURNING","RIGHT","ROW","SELECT","SESSION_USER","SETOF","SIMILAR","SMALLINT","SOME","SUBSTRING","SYMMETRIC","SYSDATE","SYSTEM_USER","SYSTEM","TABLE","TABLESAMPLE","TAG","TDES","TEXT255","TEXT32K","THEN","TIME","TIMESTAMP","TO","TOP","TRAILING","TREAT","TRIM","TRUE","TRUNCATECOLUMNS","UNION","UNIQUE","UPDATE","USER","USING","VALUES","VARCHAR","VARIADIC","VERBOSE","WALLET","WHEN","WHERE","WINDOW","WITH","WITHOUT","XMLATTRIBUTES","XMLCONCAT","XMLELEMENT","XMLEXISTS","XMLFOREST","XMLNAMESPACES","XMLPARSE","XMLPI","XMLROOT","XMLSERIALIZE","XMLTABLE"]);function a(e){return e.replace("T"," ").replace("Z","+00")}function n(e,t,a){let n="";for(let[i,r]of(n+=e?" (":"(",t.entries()))n+=(0===i?"":", ")+a(r);return n+")"}function i(e){if(null==e)throw Error("SQL identifier cannot be null or undefined");if(!1===e)return'"f"';if(!0===e)return'"t"';if(e instanceof Date)return`"${a(e.toISOString())}"`;if(Array.isArray(e)){let t=[];for(let a of e)if(!0===Array.isArray(a))throw TypeError("Nested array to grouped list conversion is not supported for SQL identifier");else t.push(i(a));return t.toString()}else if(e===Object(e))throw Error("SQL identifier cannot be an object");let n=String(e).slice(0);if(!0===/^[_a-z][\d$_a-z]*$/.test(n)&&!1==!!t.has(n.toUpperCase()))return n;let r='"';for(let e of n)r+='"'===e?e+e:e;return r+'"'}function r(e){let t,i="";if(null==e)return"NULL";if("bigint"==typeof e)return BigInt(e).toString();if(e===1/0)return"'Infinity'";if(e===-1/0)return"'-Infinity'";if(Number.isNaN(e))return"'NaN'";if("number"==typeof e)return Number(e).toString();if(!1===e)return"'f'";if(!0===e)return"'t'";if(e instanceof Date)return`'${a(e.toISOString())}'`;if(Array.isArray(e)){let t=[];for(let[a,i]of e.entries())!0===Array.isArray(i)?t.push(n(0!==a,i,r)):t.push(r(i));return t.toString()}e===Object(e)?(t="jsonb",i=JSON.stringify(e)):i=String(e).slice(0);let s=!1,l="'";for(let e of i)"'"===e?l+=e+e:"\\"===e?(l+=e+e,s=!0):l+=e;return l+="'",!0===s&&(l=`E${l}`),t&&(l+=`::${t}`),l}function s(e){if(!/^[A-Za-z][A-Za-z0-9_ ]*$/.test(e))throw Error(`Not a valid keyword: "${e}". Only letters, numbers, underscores, and spaces are permitted.`);return e}function l(e,...t){let s,o;return s=0,o=RegExp("%(%|(\\d+\\$)?[ILs])","g"),e.replace(o,(e,l)=>{if("%"===l)return"%";let o=s,c=l.split("$");if(c.length>1&&(o=Number.parseInt(c[0],10)-1,l=c[1]),o<0)throw Error("specified argument 0 but arguments start at 1");if(o>t.length-1)throw Error("too few arguments");return(s=o+1,"I"===l)?i(t[o]):"L"===l?r(t[o]):"s"===l?function e(t){if(null==t)return"";if(!1===t)return"f";if(!0===t)return"t";if(t instanceof Date)return a(t.toISOString());if(Array.isArray(t)){let a=[];for(let[i,r]of t.entries())null!=r&&(!0===Array.isArray(r)?a.push(n(0!==i,r,e)):a.push(e(r)));return a.toString()}return t===Object(t)?JSON.stringify(t):String(t).toString().slice(0)}(t[o]):void 0})}function o(e,...t){return e.reduce((e,a,n)=>e+a+(t[n]??""),"")}function c(e,t){return e.join(t)}e.s(["format",()=>l,"ident",()=>i,"joinSqlFragments",()=>c,"keyword",()=>s,"literal",()=>r,"safeSql",()=>o],479084)},967533,332357,29659,193767,212695,721490,e=>{"use strict";var t=e.i(479084);function a(e,t){let a=`select count(*) from ${d(e)}`,{filters:n}=t??{};return n&&(a=o(a,n)),a+";"}function n(e,t){let a=`truncate ${d(e)}`,{cascade:n}=t??{};return n&&(a+=" cascade"),a+";"}function i(e,a,n){if(!a||0===a.length)throw Error("no filters for this delete query");let i=`delete from ${d(e)}`,{returning:r,enumArrayColumns:s}=n??{};return a&&(i=o(i,a)),r&&(i+=void 0===s||0===s.length?" returning *":` returning *, ${s.map(e=>`${(0,t.ident)(e)}::text[]`).join(",")}`),i+";"}function r(e,a,n){if(!a||0===a.length)throw Error("no value to insert");let{returning:i,enumArrayColumns:r}=n??{},s=Object.keys(a[0]).map(e=>(0,t.ident)(e)).join(","),l="";return l=0==s.length?(0,t.format)("insert into %1$s select from jsonb_populate_recordset(null::%1$s, %2$s)",d(e),(0,t.literal)(JSON.stringify(a))):(0,t.format)("insert into %1$s (%2$s) select %2$s from jsonb_populate_recordset(null::%1$s, %3$s)",d(e),s,(0,t.literal)(JSON.stringify(a))),i&&(l+=void 0===r||0===r.length?" returning *":` returning *, ${r.map(e=>`${(0,t.ident)(e)}::text[]`).join(",")}`),l+";"}function s(e,a,n,i=!0,r=!1){var l,c;let _,p="";p+=`select ${a??"*"} from ${r?(l=e,`${(0,t.ident)(l.name)}`):d(e)}`;let{filters:m,pagination:u,sorts:E}=n??{};if(m&&(p=o(p,m)),E&&(c=p,p=0===(_=E.filter(e=>e.column)).length?c:c+=` order by ${_.map(e=>{let a=e.ascending?"asc":"desc",n=e.nullsFirst?"nulls first":"nulls last";return`${(0,t.ident)(e.table)}.${(0,t.ident)(e.column)} ${a} ${n}`}).join(", ")}`),u){let{limit:e,offset:a}=u??{};p+=` limit ${(0,t.literal)(e)} offset ${(0,t.literal)(a)}`}return`${p}${i?";":""}`}function l(e,a,n){let{filters:i,returning:r,enumArrayColumns:s}=n??{};if(!i||0===i.length)throw Error("no filters for this update query");let l=Object.keys(a).map(e=>(0,t.ident)(e)).join(","),c=(0,t.format)("update %1$s set (%2$s) = (select %2$s from json_populate_record(null::%1$s, %3$s))",d(e),l,(0,t.literal)(JSON.stringify(a)));return i&&(c=o(c,i)),r&&(c+=void 0===s||0===s.length?" returning *":` returning *, ${s.map(e=>`${(0,t.ident)(e)}::text[]`).join(",")}`),c+";"}function o(e,a){return 0===a.length?e:e+=` where ${a.map(e=>{if(Array.isArray(e.column))switch(e.operator){case"in":var a,n,i=e;if(!Array.isArray(i.column))throw Error("Use inFilterSql for single columns");if(!Array.isArray(i.value))throw Error("Values for a tuple 'in' filter must be an array");let r=`(${i.column.map(e=>(0,t.ident)(e)).join(", ")})`,s=i.value.map(e=>{if(Array.isArray(e)){if(e.length!==i.column.length)throw Error("Tuple value length must match column length");return`(${e.map(e=>c(e)).join(", ")})`}{let t=String(e).split(",");if(t.length!==i.column.length)throw Error("Tuple value length must match column length");return`(${t.map(e=>c(e)).join(", ")})`}});return`${r} ${i.operator} (${s.join(", ")})`;case"=":case"<>":case">":case"<":case">=":case"<=":var l=e;if(!Array.isArray(l.column))throw Error("Use standard applyFilters for single column");if(!Array.isArray(l.value))throw Error("Tuple filter value must be an array");if(l.value.length!==l.column.length)throw Error("Tuple filter value must have the same length as the column array");let o=`(${l.column.map(e=>(0,t.ident)(e)).join(", ")})`,d=`(${l.value.map(e=>c(e)).join(", ")})`;return`${o} ${l.operator} ${d}`;default:throw Error(`Cannot use ${e.operator} operator in a tuple filter`)}switch(e.operator){case"in":let _;return _=Array.isArray((a=e).value)?a.value.map(e=>c(e)):String(a.value).split(",").map(e=>c(e)),`${(0,t.ident)(a.column)} ${a.operator} (${_.join(",")})`;case"is":var p=e;let m=String(p.value);switch(m){case"null":case"false":case"true":case"not null":return`${(0,t.ident)(p.column)} ${p.operator} ${m}`;default:return`${(0,t.ident)(p.column)} ${p.operator} ${c(p.value)}`}case"~~":case"~~*":case"!~~":case"!~~*":return n=e,`${(0,t.ident)(n.column)}::text ${n.operator} ${c(n.value)}`;default:return`${(0,t.ident)(e.column)} ${e.operator} ${c(e.value)}`}}).join(" and ")}`}function c(e){if("string"==typeof e&&!(e?.startsWith("ARRAY[")&&e?.endsWith("]")))return(0,t.literal)(e);return e}function d(e){return`${(0,t.ident)(e.schema)}.${(0,t.ident)(e.name)}`}function _(e){return`
    begin;
 
    ${e}
    
    commit;
  `}function p(e){return`
    begin;
 
    ${e}
    
    rollback;
  `}e.s(["countQuery",()=>a,"deleteQuery",()=>i,"insertQuery",()=>r,"selectQuery",()=>s,"truncateQuery",()=>n,"updateQuery",()=>l,"wrapWithRollback",()=>p,"wrapWithTransaction",()=>_],332357);class m{table;action;options;pagination;constructor(e,t,a){this.table=e,this.action=t,this.options=a}range(e,t){return this.pagination={offset:e,limit:t-e+1},this}toSql(e={isCTE:!1,isFinal:!0}){try{let{actionValue:t,actionOptions:o,filters:c,sorts:d}=this.options??{};switch(this.action){case"count":return a(this.table,{filters:c});case"delete":return i(this.table,c,{returning:o?.returning,enumArrayColumns:o?.enumArrayColumns});case"insert":return r(this.table,t,{returning:o?.returning,enumArrayColumns:o?.enumArrayColumns});case"select":return s(this.table,t,{filters:c,pagination:this.pagination,sorts:d},e.isFinal,e.isCTE);case"update":return l(this.table,t,{filters:c,returning:o?.returning,enumArrayColumns:o?.enumArrayColumns});case"truncate":return n(this.table,{cascade:o?.cascade});default:return""}}catch(e){throw e}}}e.s(["QueryModifier",()=>m],29659);class u{table;action;actionValue;actionOptions;filters;sorts;constructor(e,t,a,n){this.table=e,this.action=t,this.actionValue=a,this.actionOptions=n,this.filters=[],this.sorts=[]}filter(e,t,a){return this.filters.push({column:e,operator:t,value:a}),this}match(e){return Object.entries(e).map(([e,t])=>{this.filters.push({column:e,operator:"=",value:t})}),this}order(e,t,a=!0,n=!1){return this.sorts.push({table:e,column:t,ascending:a,nullsFirst:n}),this}range(e,t){return this._getQueryModifier().range(e,t)}clone(){let e=structuredClone({table:this.table,action:this.action,actionValue:this.actionValue,actionOptions:this.actionOptions,filters:this.filters,sorts:this.sorts}),t=new u(e.table,e.action,e.actionValue,e.actionOptions);return t.filters=e.filters,t.sorts=e.sorts,t}toSql(e){return this._getQueryModifier().toSql(e)}_getQueryModifier(){return new m(this.table,this.action,{actionValue:this.actionValue,actionOptions:this.actionOptions,filters:this.filters,sorts:this.sorts})}}e.s(["QueryFilter",()=>u],193767);class E{table;constructor(e){this.table=e}count(){return new u(this.table,"count")}delete(e){return new u(this.table,"delete",void 0,e)}insert(e,t){return new u(this.table,"insert",e,t)}select(e){return new u(this.table,"select",e)}update(e,t){return new u(this.table,"update",e,t)}truncate(e){return new u(this.table,"truncate",void 0,e)}}e.s(["QueryAction",()=>E],212695);class g{from(e,t){return new E({name:e,schema:t??"public"})}}e.s(["Query",()=>g],721490),e.s([],967533)},976876,761087,486603,981263,254873,198687,673351,784883,201049,557928,567205,912920,454430,330006,819615,211309,267655,58347,e=>{"use strict";var t=e.i(97429),a=e.i(248593),n=e.i(479084);let i=(e,t)=>n.safeSql`
COALESCE(
  (
    SELECT
      array_agg(row_to_json(${(0,n.ident)(e)})) FILTER (WHERE ${t})
    FROM
      ${(0,n.ident)(e)}
  ),
  '{}'
) AS ${(0,n.ident)(e)}`;function r(e,t,a){return(a&&(t=a.concat(t??[])),e?.length)?n.safeSql`IN (${(0,n.joinSqlFragments)(e.map(n.literal),",")})`:t?.length?n.safeSql`NOT IN (${(0,n.joinSqlFragments)(t.map(n.literal),",")})`:n.safeSql``}let s=n.safeSql`
-- Lists each column's privileges in the form of:
--
-- [
--   {
--     "column_id": "12345.1",
--     "relation_schema": "public",
--     "relation_name": "mytable",
--     "column_name": "mycolumn",
--     "privileges": [
--       {
--         "grantor": "postgres",
--         "grantee": "myrole",
--         "privilege_type": "SELECT",
--         "is_grantable": false
--       },
--       ...
--     ]
--   },
--   ...
-- ]
--
-- Modified from information_schema.column_privileges. We try to be as close as
-- possible to the view definition, obtained from:
--
-- select pg_get_viewdef('information_schema.column_privileges');
--
-- The main differences are:
-- - we include column privileges for materialized views
--   (reason for exclusion in information_schema.column_privileges:
--    https://www.postgresql.org/message-id/9136.1502740844%40sss.pgh.pa.us)
-- - we query a.attrelid and a.attnum to generate column_id
-- - table_catalog is omitted
-- - table_schema -> relation_schema, table_name -> relation_name
--
-- Column privileges are intertwined with table privileges in that table
-- privileges override column privileges. E.g. if we do:
--
-- grant all on mytable to myrole;
--
-- Then myrole is granted privileges for ALL columns. Likewise, if we do:
--
-- grant all (id) on mytable to myrole;
-- revoke all on mytable from myrole;
--
-- Then the grant on the id column is revoked.
--
-- This is unlike how grants for schemas and tables interact, where you need
-- privileges for BOTH the schema the table is in AND the table itself in order
-- to access the table.

select (x.attrelid || '.' || x.attnum) as column_id,
       nc.nspname as relation_schema,
       x.relname as relation_name,
       x.attname as column_name,
       coalesce(
         jsonb_agg(
           jsonb_build_object(
             'grantor', u_grantor.rolname,
             'grantee', grantee.rolname,
             'privilege_type', x.prtype,
             'is_grantable', x.grantable
           )
         ),
         '[]'
       ) as privileges
from
  (select pr_c.grantor,
          pr_c.grantee,
          a.attrelid,
          a.attnum,
          a.attname,
          pr_c.relname,
          pr_c.relnamespace,
          pr_c.prtype,
          pr_c.grantable,
          pr_c.relowner
   from
     (select pg_class.oid,
             pg_class.relname,
             pg_class.relnamespace,
             pg_class.relowner,
             (aclexplode(coalesce(pg_class.relacl, acldefault('r', pg_class.relowner)))).grantor as grantor,
             (aclexplode(coalesce(pg_class.relacl, acldefault('r', pg_class.relowner)))).grantee as grantee,
             (aclexplode(coalesce(pg_class.relacl, acldefault('r', pg_class.relowner)))).privilege_type as privilege_type,
             (aclexplode(coalesce(pg_class.relacl, acldefault('r', pg_class.relowner)))).is_grantable as is_grantable
      from pg_class
      where (pg_class.relkind = any (array['r',
                                           'v',
                                           'm',
                                           'f',
                                           'p'])) ) pr_c(oid, relname, relnamespace, relowner, grantor, grantee, prtype, grantable),
                                                    pg_attribute a
   where ((a.attrelid = pr_c.oid)
          and (a.attnum > 0)
          and (not a.attisdropped))
   union select pr_a.grantor,
                pr_a.grantee,
                pr_a.attrelid,
                pr_a.attnum,
                pr_a.attname,
                c.relname,
                c.relnamespace,
                pr_a.prtype,
                pr_a.grantable,
                c.relowner
   from
     (select a.attrelid,
             a.attnum,
             a.attname,
             (aclexplode(coalesce(a.attacl, acldefault('c', cc.relowner)))).grantor as grantor,
             (aclexplode(coalesce(a.attacl, acldefault('c', cc.relowner)))).grantee as grantee,
             (aclexplode(coalesce(a.attacl, acldefault('c', cc.relowner)))).privilege_type as privilege_type,
             (aclexplode(coalesce(a.attacl, acldefault('c', cc.relowner)))).is_grantable as is_grantable
      from (pg_attribute a
            join pg_class cc on ((a.attrelid = cc.oid)))
      where ((a.attnum > 0)
             and (not a.attisdropped))) pr_a(attrelid, attnum, attname, grantor, grantee, prtype, grantable),
                                        pg_class c
   where ((pr_a.attrelid = c.oid)
          and (c.relkind = any (ARRAY['r',
                                      'v',
                                      'm',
                                      'f',
                                      'p'])))) x,
     pg_namespace nc,
     pg_authid u_grantor,
  (select pg_authid.oid,
          pg_authid.rolname
   from pg_authid
   union all select (0)::oid as oid,
                    'PUBLIC') grantee(oid, rolname)
where ((x.relnamespace = nc.oid)
       and (x.grantee = grantee.oid)
       and (x.grantor = u_grantor.oid)
       and (x.prtype = any (ARRAY['INSERT',
                                  'SELECT',
                                  'UPDATE',
                                  'REFERENCES']))
       and (pg_has_role(u_grantor.oid, 'USAGE')
            or pg_has_role(grantee.oid, 'USAGE')
            or (grantee.rolname = 'PUBLIC')))
group by column_id,
         nc.nspname,
         x.relname,
         x.attname
`,l=t.z.object({grantor:t.z.string(),grantee:t.z.string(),privilege_type:t.z.union([t.z.literal("SELECT"),t.z.literal("INSERT"),t.z.literal("UPDATE"),t.z.literal("REFERENCES")]),is_grantable:t.z.boolean()}),o=t.z.object({column_id:t.z.string(),relation_schema:t.z.string(),relation_name:t.z.string(),column_name:t.z.string(),privileges:t.z.array(l)}),c=t.z.array(o);t.z.object({columnId:t.z.string(),grantee:t.z.string(),privilegeType:t.z.union([t.z.literal("ALL"),t.z.literal("SELECT"),t.z.literal("INSERT"),t.z.literal("UPDATE"),t.z.literal("REFERENCES")]),isGrantable:t.z.boolean().optional()}),e.s(["default",0,{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,columnIds:l,limit:o,offset:d}={}){let _=n.safeSql`
  with column_privileges as (${s})
  select *
  from column_privileges
  `,p=[],m=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return m&&p.push(n.safeSql`relation_schema ${m}`),l?.length&&p.push(n.safeSql`column_id in (${(0,n.joinSqlFragments)(l.map(n.literal),",")})`),p.length>0&&(_=n.safeSql`${_} where ${(0,n.joinSqlFragments)(p," and ")}`),o&&(_=n.safeSql`${_} limit ${(0,n.literal)(o)}`),d&&(_=n.safeSql`${_} offset ${(0,n.literal)(d)}`),{sql:_,zod:c}},grant:function(e){return{sql:n.safeSql`
do $$
declare
  col record;
begin
${(0,n.joinSqlFragments)(e.map(({privilegeType:e,columnId:t,grantee:a,isGrantable:i})=>{let[r,s]=t.split(".");return n.safeSql`
select *
from pg_attribute a
where a.attrelid = ${(0,n.literal)(r)}
  and a.attnum = ${(0,n.literal)(s)}
into col;
execute format(
  'grant ${(0,n.keyword)(e)} (%I) on %s to ${"public"===a.toLowerCase()?n.safeSql`public`:(0,n.ident)(a)} ${i?n.safeSql`with grant option`:n.safeSql``}',
  col.attname,
  col.attrelid::regclass
);`}),"\n")}
end $$;
`}},revoke:function(e){return{sql:n.safeSql`
do $$
declare
  col record;
begin
${(0,n.joinSqlFragments)(e.map(({privilegeType:e,columnId:t,grantee:a})=>{let[i,r]=t.split(".");return n.safeSql`
select *
from pg_attribute a
where a.attrelid = ${(0,n.literal)(i)}
  and a.attnum = ${(0,n.literal)(r)}
into col;
execute format(
  'revoke ${(0,n.keyword)(e)} (%I) on %s from ${"public"===a.toLowerCase()?n.safeSql`public`:(0,n.ident)(a)}',
  col.attname,
  col.attrelid::regclass
);`}),"\n")}
end $$;
`}},zod:o}],976876);let d=n.safeSql`
-- Adapted from information_schema.columns

SELECT
  c.oid :: int8 AS table_id,
  nc.nspname AS schema,
  c.relname AS table,
  (c.oid || '.' || a.attnum) AS id,
  a.attnum AS ordinal_position,
  a.attname AS name,
  CASE
    WHEN a.atthasdef THEN pg_get_expr(ad.adbin, ad.adrelid)
    ELSE NULL
  END AS default_value,
  CASE
    WHEN t.typtype = 'd' THEN CASE
      WHEN bt.typelem <> 0 :: oid
      AND bt.typlen = -1 THEN 'ARRAY'
      WHEN nbt.nspname = 'pg_catalog' THEN format_type(t.typbasetype, NULL)
      ELSE 'USER-DEFINED'
    END
    ELSE CASE
      WHEN t.typelem <> 0 :: oid
      AND t.typlen = -1 THEN 'ARRAY'
      WHEN nt.nspname = 'pg_catalog' THEN format_type(a.atttypid, NULL)
      ELSE 'USER-DEFINED'
    END
  END AS data_type,
  COALESCE(bt.typname, t.typname) AS format,
  a.attidentity IN ('a', 'd') AS is_identity,
  CASE
    a.attidentity
    WHEN 'a' THEN 'ALWAYS'
    WHEN 'd' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  a.attgenerated IN ('s') AS is_generated,
  NOT (
    a.attnotnull
    OR t.typtype = 'd' AND t.typnotnull
  ) AS is_nullable,
  (
    c.relkind IN ('r', 'p')
    OR c.relkind IN ('v', 'f') AND pg_column_is_updatable(c.oid, a.attnum, FALSE)
  ) AS is_updatable,
  uniques.table_id IS NOT NULL AS is_unique,
  check_constraints.definition AS "check",
  array_to_json(
    array(
      SELECT
        enumlabel
      FROM
        pg_catalog.pg_enum enums
      WHERE
        enums.enumtypid = coalesce(bt.oid, t.oid)
        OR enums.enumtypid = coalesce(bt.typelem, t.typelem)
      ORDER BY
        enums.enumsortorder
    )
  ) AS enums,
  col_description(c.oid, a.attnum) AS comment
FROM
  pg_attribute a
  LEFT JOIN pg_attrdef ad ON a.attrelid = ad.adrelid
  AND a.attnum = ad.adnum
  JOIN (
    pg_class c
    JOIN pg_namespace nc ON c.relnamespace = nc.oid
  ) ON a.attrelid = c.oid
  JOIN (
    pg_type t
    JOIN pg_namespace nt ON t.typnamespace = nt.oid
  ) ON a.atttypid = t.oid
  LEFT JOIN (
    pg_type bt
    JOIN pg_namespace nbt ON bt.typnamespace = nbt.oid
  ) ON t.typtype = 'd'
  AND t.typbasetype = bt.oid
  LEFT JOIN (
    SELECT DISTINCT ON (table_id, ordinal_position)
      conrelid AS table_id,
      conkey[1] AS ordinal_position
    FROM pg_catalog.pg_constraint
    WHERE contype = 'u' AND cardinality(conkey) = 1
  ) AS uniques ON uniques.table_id = c.oid AND uniques.ordinal_position = a.attnum
  LEFT JOIN (
    -- We only select the first column check
    SELECT DISTINCT ON (table_id, ordinal_position)
      conrelid AS table_id,
      conkey[1] AS ordinal_position,
      substring(
        pg_get_constraintdef(pg_constraint.oid, true),
        8,
        length(pg_get_constraintdef(pg_constraint.oid, true)) - 8
      ) AS "definition"
    FROM pg_constraint
    WHERE contype = 'c' AND cardinality(conkey) = 1
    ORDER BY table_id, ordinal_position, oid asc
  ) AS check_constraints ON check_constraints.table_id = c.oid AND check_constraints.ordinal_position = a.attnum
WHERE
  NOT pg_is_other_temp_schema(nc.oid)
  AND a.attnum > 0
  AND NOT a.attisdropped
  AND (c.relkind IN ('r', 'v', 'm', 'f', 'p'))
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_column_privilege(
      c.oid,
      a.attnum,
      'SELECT, INSERT, UPDATE, REFERENCES'
    )
  )
`,_=t.z.object({id:t.z.string(),table_id:t.z.number(),schema:t.z.string(),table:t.z.string(),name:t.z.string(),ordinal_position:t.z.number(),data_type:t.z.string(),format:t.z.string(),is_identity:t.z.boolean(),identity_generation:t.z.string().nullable(),is_generated:t.z.boolean(),is_nullable:t.z.boolean(),is_updatable:t.z.boolean(),is_unique:t.z.boolean(),check:t.z.string().nullable(),default_value:t.z.any().nullable(),enums:t.z.array(t.z.string()),comment:t.z.string().nullable()}),p=t.z.array(_),m=t.z.optional(_),u=e=>e.endsWith("[]")?`${(0,n.ident)(e.slice(0,-2))}[]`:e.includes(".")?e:(0,n.ident)(e);e.s(["default",0,{list:function({tableId:e,includeSystemSchemas:t=!1,includedSchemas:i,excludedSchemas:s,limit:l,offset:o}={}){let c=n.safeSql`
with
  columns as (${d})
select
  *
from
  columns
where
 true
`,_=r(i,s,t?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return _&&(c=n.safeSql`${c} and schema ${_}`),void 0!==e&&(c=n.safeSql`${c} and table_id = ${(0,n.literal)(e)} `),l&&(c=n.safeSql`${c} limit ${(0,n.literal)(l)}`),o&&(c=n.safeSql`${c} offset ${(0,n.literal)(o)}`),{sql:c,zod:p}},retrieve:function(e){return{sql:n.safeSql`WITH columns AS (${d}) SELECT * FROM columns WHERE ${function(e){if("id"in e&&e.id)return n.safeSql`${(0,n.ident)("id")} = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name&&e.schema&&e.table)return n.safeSql`schema = ${(0,n.literal)(e.schema)} AND ${(0,n.ident)("table")} = ${(0,n.literal)(e.table)} AND name = ${(0,n.literal)(e.name)}`;throw Error("Must provide either id or schema, name and table")}(e)};`,zod:m}},create:function({schema:e,table:t,name:a,type:i,default_value:r,default_value_format:s="literal",is_identity:l=!1,identity_generation:o="BY DEFAULT",is_nullable:c,is_primary_key:d=!1,is_unique:_=!1,comment:p,check:m,no_transaction:E=!1}){let g="";if(l){if(void 0!==r)throw Error("Columns cannot both be identity and have a default value");g=`GENERATED ${o} AS IDENTITY`}else void 0===r||(g="expression"===s?`DEFAULT ${r}`:`DEFAULT ${(0,n.literal)(r)}`);let f="";void 0!==c&&(f=c?"NULL":"NOT NULL");let b=void 0===m?"":`CHECK (${m})`,h=void 0===p?"":`COMMENT ON COLUMN ${(0,n.ident)(e)}.${(0,n.ident)(t)}.${(0,n.ident)(a)} IS ${(0,n.literal)(p)}`,S=`
  ALTER TABLE ${(0,n.ident)(e)}.${(0,n.ident)(t)} ADD COLUMN ${(0,n.ident)(a)} ${u(i)}
    ${g}
    ${f}
    ${d?"PRIMARY KEY":""}
    ${_?"UNIQUE":""}
    ${b};
  ${h};`;return E?{sql:S}:{sql:`
  BEGIN;
    ${S};
  COMMIT;`}},update:function(e,{name:t,type:a,drop_default:i=!1,default_value:r,default_value_format:s="literal",is_identity:l,identity_generation:o="BY DEFAULT",is_nullable:c,is_unique:d,comment:_,check:p}){let m,E,g=void 0===t||t===e.name?"":`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} RENAME COLUMN ${(0,n.ident)(e.name)} TO ${(0,n.ident)(t)};`,f=void 0===a?"":`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} ALTER COLUMN ${(0,n.ident)(e.name)} SET DATA TYPE ${u(a)} USING ${(0,n.ident)(e.name)}::${u(a)};`;if(i)m=`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} ALTER COLUMN ${(0,n.ident)(e.name)} DROP DEFAULT;`;else if(void 0===r)m="";else{let t="expression"===s?r:(0,n.literal)(r);m=`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} ALTER COLUMN ${(0,n.ident)(e.name)} SET DEFAULT ${t};`}let b=`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} ALTER COLUMN ${(0,n.ident)(e.name)}`;!1===l?b+=" DROP IDENTITY IF EXISTS;":!0===e.is_identity?void 0===o?b="":b+=` SET GENERATED ${o};`:void 0===l?b="":b+=` ADD GENERATED ${o} AS IDENTITY;`,E=void 0===c?"":c?`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} ALTER COLUMN ${(0,n.ident)(e.name)} DROP NOT NULL;`:`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} ALTER COLUMN ${(0,n.ident)(e.name)} SET NOT NULL;`;let h="";!0===e.is_unique&&!1===d?h=`
DO $$
DECLARE
  r record;
BEGIN
  FOR r IN
    SELECT conname FROM pg_constraint WHERE
      contype = 'u'
      AND cardinality(conkey) = 1
      AND conrelid = ${(0,n.literal)(e.table_id)}
      AND conkey[1] = ${(0,n.literal)(e.ordinal_position)}
  LOOP
    EXECUTE ${(0,n.literal)(`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} DROP CONSTRAINT `)} || quote_ident(r.conname);
  END LOOP;
END
$$;
`:!1===e.is_unique&&!0===d&&(h=`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} ADD UNIQUE (${(0,n.ident)(e.name)});`);let S=void 0===_?"":`COMMENT ON COLUMN ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)}.${(0,n.ident)(e.name)} IS ${(0,n.literal)(_)};`,N=void 0===p?"":`
DO $$
DECLARE
  v_conname name;
  v_conkey int2[];
BEGIN
  SELECT conname into v_conname FROM pg_constraint WHERE
    contype = 'c'
    AND cardinality(conkey) = 1
    AND conrelid = ${(0,n.literal)(e.table_id)}
    AND conkey[1] = ${(0,n.literal)(e.ordinal_position)}
    ORDER BY oid asc
    LIMIT 1;

  IF v_conname IS NOT NULL THEN
    EXECUTE format('ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} DROP CONSTRAINT %I', v_conname);
  END IF;

  ${null!==p?`
  ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} ADD CONSTRAINT ${(0,n.ident)(`${e.table}_${e.name}_check`)} CHECK (${p});

  SELECT conkey into v_conkey FROM pg_constraint WHERE conname = ${(0,n.literal)(`${e.table}_${e.name}_check`)};

  ASSERT v_conkey IS NOT NULL, 'error creating column constraint: check condition must refer to this column';
  ASSERT cardinality(v_conkey) = 1, 'error creating column constraint: check condition cannot refer to multiple columns';
  ASSERT v_conkey[1] = ${(0,n.literal)(e.ordinal_position)}, 'error creating column constraint: check condition cannot refer to other columns';
`:""}
END
$$;
`;return{sql:`
BEGIN;
  ${E}
  ${f}
  ${m}
  ${b}
  ${h}
  ${S}
  ${N}
  ${g}
COMMIT;`}},remove:function(e,{cascade:t=!1}={}){return{sql:n.safeSql`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)} DROP COLUMN ${(0,n.ident)(e.name)} ${t?n.safeSql`CASCADE`:n.safeSql`RESTRICT`};`}},zod:_},"pgColumnArrayZod",0,p],761087);let E=n.safeSql`
SELECT
  name,
  setting,
  category,
  TRIM(split_part(category, '/', 1)) AS group,
  TRIM(split_part(category, '/', 2)) AS subgroup,
  unit,
  short_desc,
  extra_desc,
  context,
  vartype,
  source,
  min_val,
  max_val,
  enumvals,
  boot_val,
  reset_val,
  sourcefile,
  sourceline,
  pending_restart
FROM
  pg_settings
ORDER BY
  category,
  name
`,g=t.z.object({name:t.z.string(),setting:t.z.string(),category:t.z.string(),group:t.z.string(),subgroup:t.z.string(),unit:t.z.string().nullable(),short_desc:t.z.string(),extra_desc:t.z.string().nullable(),context:t.z.string(),vartype:t.z.string(),source:t.z.string(),min_val:t.z.string().nullable(),max_val:t.z.string().nullable(),enumvals:t.z.array(t.z.string()).nullable(),boot_val:t.z.string().nullable(),reset_val:t.z.string().nullable(),sourcefile:t.z.string().nullable(),sourceline:t.z.number().nullable(),pending_restart:t.z.boolean()}),f=t.z.array(g);e.s(["default",0,{list:function({limit:e,offset:t}={}){let a=E;return e&&(a=n.safeSql`${a} LIMIT ${(0,n.literal)(e)}`),t&&(a=n.safeSql`${a} OFFSET ${(0,n.literal)(t)}`),{sql:a,zod:f}},zod:g}],486603);let b=n.safeSql`
SELECT
  e.name,
  n.nspname AS schema,
  e.default_version,
  x.extversion AS installed_version,
  e.comment
FROM
  pg_available_extensions() e(name, default_version, comment)
  LEFT JOIN pg_extension x ON e.name = x.extname
  LEFT JOIN pg_namespace n ON x.extnamespace = n.oid
`,h=t.z.object({name:t.z.string(),schema:t.z.string().nullable(),default_version:t.z.string(),installed_version:t.z.string().nullable(),comment:t.z.string()}),S=t.z.array(h),N=t.z.optional(h);e.s(["default",0,{list:function({limit:e,offset:t}={}){let a=b;return e&&(a=n.safeSql`${a} LIMIT ${(0,n.literal)(e)}`),t&&(a=n.safeSql`${a} OFFSET ${(0,n.literal)(t)}`),{sql:a,zod:S}},retrieve:function({name:e}){return{sql:n.safeSql`${b} WHERE name = ${(0,n.literal)(e)};`,zod:N}},create:function({name:e,schema:t,version:a,cascade:i=!1}){return{sql:n.safeSql`
CREATE EXTENSION ${(0,n.ident)(e)}
  ${void 0===t?n.safeSql``:n.safeSql`SCHEMA ${(0,n.ident)(t)}`}
  ${void 0===a?n.safeSql``:n.safeSql`VERSION ${(0,n.literal)(a)}`}
  ${i?n.safeSql`CASCADE`:n.safeSql``};`}},update:function(e,{update:t=!1,version:a,schema:i}){let r=n.safeSql``;t&&(r=n.safeSql`ALTER EXTENSION ${(0,n.ident)(e)} UPDATE ${void 0===a?n.safeSql``:n.safeSql`TO ${(0,n.literal)(a)}`};`);let s=void 0===i?n.safeSql``:n.safeSql`ALTER EXTENSION ${(0,n.ident)(e)} SET SCHEMA ${(0,n.ident)(i)};`;return{sql:n.safeSql`BEGIN; ${r} ${s} COMMIT;`}},remove:function(e,{cascade:t=!1}={}){return{sql:n.safeSql`DROP EXTENSION ${(0,n.ident)(e)} ${t?n.safeSql`CASCADE`:n.safeSql`RESTRICT`};`}},zod:h}],981263);let T=n.safeSql`
select
  c.oid::int8 as id,
  n.nspname as schema,
  c.relname as name,
  obj_description(c.oid) as comment,
  fs.srvname as foreign_server_name,
  fdw.fdwname as foreign_data_wrapper_name,
  handler.proname as foreign_data_wrapper_handler
from
  pg_class c
  join pg_namespace n on n.oid = c.relnamespace
  inner join pg_foreign_table ft on ft.ftrelid = c.oid
  inner join pg_foreign_server fs on fs.oid = ft.ftserver
  inner join pg_foreign_data_wrapper fdw on fdw.oid = fs.srvfdw
  inner join pg_proc handler on handler.oid = fdw.fdwhandler
where
  c.relkind = 'f'
`,$=t.z.object({id:t.z.number(),schema:t.z.string(),name:t.z.string(),comment:t.z.string().nullable(),foreign_server_name:t.z.string(),foreign_data_wrapper_name:t.z.string(),foreign_data_wrapper_handler:t.z.string(),columns:p.optional()}),v=t.z.array($),A=t.z.optional($),I=({includeColumns:e})=>n.safeSql`
with foreign_tables as (${T})
  ${e?n.safeSql`, columns as (${d})`:n.safeSql``}
select
  *
  ${e?n.safeSql`, ${i("columns",n.safeSql`columns.table_id = foreign_tables.id`)}`:n.safeSql``}
from foreign_tables`;e.s(["default",0,{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l,includeColumns:o=!0}={}){let c=I({includeColumns:o}),d=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return d&&(c=n.safeSql`${c} where schema ${d}`),s&&(c=n.safeSql`${c} limit ${(0,n.literal)(s)}`),l&&(c=n.safeSql`${c} offset ${(0,n.literal)(l)}`),{sql:c,zod:v}},retrieve:function(e){return{sql:n.safeSql`${I({includeColumns:!0})} where ${function(e){if("id"in e&&e.id)return n.safeSql`${(0,n.ident)("id")} = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name&&e.schema)return n.safeSql`${(0,n.ident)("name")} = ${(0,n.literal)(e.name)} and ${(0,n.ident)("schema")} = ${(0,n.literal)(e.schema)}`;throw Error("Must provide either id or name and schema")}(e)};`,zod:A}},zod:$}],254873);let R=n.safeSql`
-- CTE with sane arg_modes, arg_names, and arg_types.
-- All three are always of the same length.
-- All three include all args, including OUT and TABLE args.
with functions as (
  select
    *,
    -- proargmodes is null when all arg modes are IN
    coalesce(
      p.proargmodes,
      array_fill('i'::text, array[cardinality(coalesce(p.proallargtypes, p.proargtypes))])
    ) as arg_modes,
    -- proargnames is null when all args are unnamed
    coalesce(
      p.proargnames,
      array_fill(''::text, array[cardinality(coalesce(p.proallargtypes, p.proargtypes))])
    ) as arg_names,
    -- proallargtypes is null when all arg modes are IN
    coalesce(p.proallargtypes, p.proargtypes) as arg_types,
    array_cat(
      array_fill(false, array[pronargs - pronargdefaults]),
      array_fill(true, array[pronargdefaults])) as arg_has_defaults
  from
    pg_proc as p
  where
    p.prokind = 'f'
)
select
  f.oid as id,
  n.nspname as schema,
  f.proname as name,
  l.lanname as language,
  case
    when l.lanname = 'internal' then ''
    else f.prosrc
  end as definition,
  case
    when l.lanname = 'internal' then f.prosrc
    else pg_get_functiondef(f.oid)
  end as complete_statement,
  coalesce(f_args.args, '[]') as args,
  pg_get_function_arguments(f.oid) as argument_types,
  pg_get_function_identity_arguments(f.oid) as identity_argument_types,
  f.prorettype as return_type_id,
  pg_get_function_result(f.oid) as return_type,
  nullif(rt.typrelid, 0) as return_type_relation_id,
  f.proretset as is_set_returning_function,
  case
    when f.provolatile = 'i' then 'IMMUTABLE'
    when f.provolatile = 's' then 'STABLE'
    when f.provolatile = 'v' then 'VOLATILE'
  end as behavior,
  f.prosecdef as security_definer,
  f_config.config_params as config_params
from
  functions f
  left join pg_namespace n on f.pronamespace = n.oid
  left join pg_language l on f.prolang = l.oid
  left join pg_type rt on rt.oid = f.prorettype
  left join (
    select
      oid,
      jsonb_object_agg(param, value) filter (where param is not null) as config_params
    from
      (
        select
          oid,
          (string_to_array(unnest(proconfig), '='))[1] as param,
          (string_to_array(unnest(proconfig), '='))[2] as value
        from
          functions
      ) as t
    group by
      oid
  ) f_config on f_config.oid = f.oid
  left join (
    select
      oid,
      jsonb_agg(jsonb_build_object(
        'mode', t2.mode,
        'name', name,
        'type_id', type_id,
        -- Cast null into false boolean
        'has_default', COALESCE(has_default, false)
      )) as args
    from
      (
        select
          oid,
          unnest(arg_modes) as mode,
          unnest(arg_names) as name,
          -- Coming from: coalesce(p.proallargtypes, p.proargtypes) postgres won't automatically assume
          -- integer, we need to cast it to be properly parsed
          unnest(arg_types)::int8 as type_id,
          unnest(arg_has_defaults) as has_default
        from
          functions
      ) as t1,
      lateral (
        select
          case
            when t1.mode = 'i' then 'in'
            when t1.mode = 'o' then 'out'
            when t1.mode = 'b' then 'inout'
            when t1.mode = 'v' then 'variadic'
            else 'table'
          end as mode
      ) as t2
    group by
      t1.oid
  ) f_args on f_args.oid = f.oid
`,L=t.z.object({id:t.z.number(),schema:t.z.string(),name:t.z.string(),language:t.z.string(),definition:t.z.string(),complete_statement:t.z.string(),args:t.z.array(t.z.object({mode:t.z.union([t.z.literal("in"),t.z.literal("out"),t.z.literal("inout"),t.z.literal("variadic"),t.z.literal("table")]),name:t.z.string(),type_id:t.z.number(),has_default:t.z.boolean()})),argument_types:t.z.string(),identity_argument_types:t.z.string(),return_type_id:t.z.number(),return_type:t.z.string(),return_type_relation_id:t.z.union([t.z.number(),t.z.null()]),is_set_returning_function:t.z.boolean(),behavior:t.z.union([t.z.literal("IMMUTABLE"),t.z.literal("STABLE"),t.z.literal("VOLATILE")]),security_definer:t.z.boolean(),config_params:t.z.union([t.z.record(t.z.string(),t.z.string()),t.z.null()])}),y=t.z.array(L),O=t.z.optional(L);function C({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l}={}){let o=n.safeSql`
    with f as (
      ${R}
    )
    select
      f.*
    from f
  `,c=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return c&&(o=n.safeSql`${o} where schema ${c}`),s&&(o=n.safeSql`${o} limit ${(0,n.literal)(s)}`),l&&(o=n.safeSql`${o} offset ${(0,n.literal)(l)}`),{sql:o,zod:y}}function q({id:e,name:t,schema:a="public",args:i=[]}){if(e)return{sql:n.safeSql`
      with f as (
        ${R}
      )
      select
        f.*
      from f where id = ${(0,n.literal)(e)};`,zod:O};if(t&&a&&i){let e=i.length?n.safeSql`(
          select string_agg(type_oid::text, ' ') from (
            select (
              split_args.arr[
                array_length(
                  split_args.arr,
                  1
                )
              ]::regtype::oid
            ) as type_oid from (
              select string_to_array(
                unnest(
                  array[${(0,n.joinSqlFragments)(i.map(n.literal),",")}]
                ),
                ' '
              ) as arr
            ) as split_args
          ) args
        )`:(0,n.literal)("");return{sql:n.safeSql`with f as (
      ${R}
    )
    select
      f.*
    from f join pg_proc as p on id = p.oid where schema = ${(0,n.literal)(a)} and name = ${(0,n.literal)(t)} and p.proargtypes::text = ${e}`,zod:O}}throw Error("Must provide either id or name and schema")}let w=t.z.object({name:t.z.string(),definition:t.z.string(),args:t.z.array(t.z.string()).optional(),behavior:t.z.enum(["IMMUTABLE","STABLE","VOLATILE"]).optional(),config_params:t.z.record(t.z.string(),t.z.string()).optional(),schema:t.z.string().optional(),language:t.z.string().optional(),return_type:t.z.string().optional(),security_definer:t.z.boolean().optional()});function D({name:e,schema:t,args:a,definition:i,return_type:r,language:s,behavior:l,security_definer:o,config_params:c},{replace:d=!1}={}){return`
    CREATE ${d?"OR REPLACE":""} FUNCTION ${(0,n.ident)(t)}.${(0,n.ident)(e)}(${a?.join(", ")||""})
    RETURNS ${r}
    AS ${(0,n.literal)(i)}
    LANGUAGE ${s}
    ${l}
    CALLED ON NULL INPUT
    ${o?"SECURITY DEFINER":"SECURITY INVOKER"}
    ${c?Object.entries(c).map(([e,t])=>`SET ${e} ${"FROM CURRENT"===t?"FROM CURRENT":"TO "+('""'===t?"''":t)}`).join("\n"):""};
  `}function x({name:e,schema:a="public",args:n=[],definition:i,return_type:r="void",language:s="sql",behavior:l="VOLATILE",security_definer:o=!1,config_params:c={}}){return{sql:D({name:e,schema:a,args:n,definition:i,return_type:r,language:s,behavior:l,security_definer:o,config_params:c}),zod:t.z.void()}}let F=t.z.object({name:t.z.string().optional(),schema:t.z.string().optional(),definition:t.z.string().optional()});function z(e,{name:a,schema:i,definition:r}){let s=e.argument_types.split(", "),l=e.identity_argument_types,o="string"==typeof r?D({...e,definition:r,args:s,config_params:e.config_params??{}},{replace:!0}):"",c=a&&a!==e.name?`ALTER FUNCTION ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.name)}(${l}) RENAME TO ${(0,n.ident)(a)};`:"",d=i&&i!==e.schema?`ALTER FUNCTION ${(0,n.ident)(e.schema)}.${(0,n.ident)(a||e.name)}(${l})  SET SCHEMA ${(0,n.ident)(i)};`:"";return{sql:`
    DO LANGUAGE plpgsql $$
    BEGIN
      IF ${"string"==typeof r?"TRUE":"FALSE"} THEN
        ${o}

        IF (
          SELECT id
          FROM (${R}) AS f
          WHERE f.schema = ${(0,n.literal)(e.schema)}
          AND f.name = ${(0,n.literal)(e.name)}
          AND f.identity_argument_types = ${(0,n.literal)(l)}
        ) != ${e.id} THEN
          RAISE EXCEPTION 'Cannot find function "${e.schema}"."${e.name}"(${l})';
        END IF;
      END IF;

      ${c}

      ${d}
    END;
    $$;
  `,zod:t.z.void()}}let j=t.z.object({cascade:t.z.boolean().default(!1).optional()});function U(e,{cascade:a=!1}={}){return{sql:`DROP FUNCTION ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.name)}
  (${e.identity_argument_types})
  ${a?"CASCADE":"RESTRICT"};`,zod:t.z.void()}}e.s(["create",()=>x,"list",()=>C,"pgFunctionArrayZod",0,y,"pgFunctionCreateZod",0,w,"pgFunctionDeleteZod",0,j,"pgFunctionOptionalZod",0,O,"pgFunctionUpdateZod",0,F,"pgFunctionZod",0,L,"remove",()=>U,"retrieve",()=>q,"update",()=>z],198687);let k=n.safeSql`
  SELECT
    idx.indexrelid::int8 AS id,
    idx.indrelid::int8 AS table_id,
    n.nspname AS schema,
    idx.indnatts AS number_of_attributes,
    idx.indnkeyatts AS number_of_key_attributes,
    idx.indisunique AS is_unique,
    idx.indisprimary AS is_primary,
    idx.indisexclusion AS is_exclusion,
    idx.indimmediate AS is_immediate,
    idx.indisclustered AS is_clustered,
    idx.indisvalid AS is_valid,
    idx.indcheckxmin AS check_xmin,
    idx.indisready AS is_ready,
    idx.indislive AS is_live,
    idx.indisreplident AS is_replica_identity,
    idx.indkey::smallint[] AS key_attributes,
    idx.indcollation::integer[] AS collation,
    idx.indclass::integer[] AS class,
    idx.indoption::smallint[] AS options,
    idx.indpred AS index_predicate,
    obj_description(idx.indexrelid, 'pg_class') AS comment,
    ix.indexdef as index_definition,
    am.amname AS access_method,
    jsonb_agg(
      jsonb_build_object(
        'attribute_number', a.attnum,
        'attribute_name', a.attname,
        'data_type', format_type(a.atttypid, a.atttypmod)
      )
      ORDER BY a.attnum
    ) AS index_attributes
  FROM
    pg_index idx
    JOIN pg_class c ON c.oid = idx.indexrelid
    JOIN pg_namespace n ON c.relnamespace = n.oid
    JOIN pg_am am ON c.relam = am.oid
    JOIN pg_attribute a ON a.attrelid = c.oid AND a.attnum = ANY(idx.indkey)
    JOIN pg_indexes ix ON c.relname = ix.indexname
  GROUP BY
    idx.indexrelid, idx.indrelid, n.nspname, idx.indnatts, idx.indnkeyatts, idx.indisunique, 
    idx.indisprimary, idx.indisexclusion, idx.indimmediate, idx.indisclustered, idx.indisvalid, 
    idx.indcheckxmin, idx.indisready, idx.indislive, idx.indisreplident, idx.indkey, 
    idx.indcollation, idx.indclass, idx.indoption, idx.indexprs, idx.indpred, ix.indexdef, am.amname
`,H=t.z.object({id:t.z.number(),table_id:t.z.number(),schema:t.z.string(),number_of_attributes:t.z.number(),number_of_key_attributes:t.z.number(),is_unique:t.z.boolean(),is_primary:t.z.boolean(),is_exclusion:t.z.boolean(),is_immediate:t.z.boolean(),is_clustered:t.z.boolean(),is_valid:t.z.boolean(),check_xmin:t.z.boolean(),is_ready:t.z.boolean(),is_live:t.z.boolean(),is_replica_identity:t.z.boolean(),key_attributes:t.z.array(t.z.number()),collation:t.z.array(t.z.number()),class:t.z.array(t.z.number()),options:t.z.array(t.z.number()),index_predicate:t.z.string().nullable(),comment:t.z.string().nullable(),index_definition:t.z.string(),access_method:t.z.string(),index_attributes:t.z.array(t.z.object({attribute_number:t.z.number(),attribute_name:t.z.string(),data_type:t.z.string()}))}),M=t.z.array(H),G=t.z.optional(H);e.s(["default",0,{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l}={}){let o=n.safeSql`
    with indexes as (${k})
    select *
    from indexes
  `,c=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return c&&(o=n.safeSql`${o} where schema ${c}`),s&&(o=n.safeSql`${o} limit ${(0,n.literal)(s)}`),l&&(o=n.safeSql`${o} offset ${(0,n.literal)(l)}`),{sql:o,zod:M}},retrieve:function({id:e}){return{sql:n.safeSql`
    with indexes as (${k})
    select *
    from indexes
    where id = ${(0,n.literal)(e)};
  `,zod:G}},zod:H}],673351);let P=n.safeSql`
select
  c.oid::int8 as id,
  n.nspname as schema,
  c.relname as name,
  c.relispopulated as is_populated,
  obj_description(c.oid) as comment
from
  pg_class c
  join pg_namespace n on n.oid = c.relnamespace
where
  c.relkind = 'm'
`,W=t.z.object({id:t.z.number(),schema:t.z.string(),name:t.z.string(),is_populated:t.z.boolean(),comment:t.z.string().nullable(),columns:p.optional()}),B=t.z.array(W),Y=t.z.optional(W),X=({includeColumns:e})=>n.safeSql`
with materialized_views as (${P})
  ${e?n.safeSql`, columns as (${d})`:n.safeSql``}
select
  *
  ${e?n.safeSql`, ${i("columns",n.safeSql`columns.table_id = materialized_views.id`)}`:n.safeSql``}
from materialized_views`;e.s(["default",0,{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l,includeColumns:o=!0}={}){let c=X({includeColumns:o}),d=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return d&&(c=n.safeSql`${c} where schema ${d}`),s&&(c=n.safeSql`${c} limit ${(0,n.literal)(s)}`),l&&(c=n.safeSql`${c} offset ${(0,n.literal)(l)}`),{sql:c,zod:B}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return n.safeSql`${(0,n.ident)("id")} = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name&&e.schema)return n.safeSql`${(0,n.ident)("name")} = ${(0,n.literal)(e.name)} and ${(0,n.ident)("schema")} = ${(0,n.literal)(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);return{sql:n.safeSql`${X({includeColumns:!0})} where ${t};`,zod:Y}},zod:W}],784883);let Q=n.safeSql`
select
  pol.oid :: int8 as id,
  n.nspname as schema,
  c.relname as table,
  c.oid :: int8 as table_id,
  pol.polname as name,
  case
    when pol.polpermissive then 'PERMISSIVE'::text
    else 'RESTRICTIVE'::text
  end as action,
  case
    when pol.polroles = '{0}'::oid[] then array_to_json(string_to_array('public'::text, ''::text)::name[])
    else array_to_json(array(
      select pg_roles.rolname
      from pg_roles
      where pg_roles.oid = any(pol.polroles)
      order by pg_roles.rolname
    ))
  end as roles,
  case pol.polcmd
    when 'r'::"char" then 'SELECT'::text
    when 'a'::"char" then 'INSERT'::text
    when 'w'::"char" then 'UPDATE'::text
    when 'd'::"char" then 'DELETE'::text
    when '*'::"char" then 'ALL'::text
    else null::text
  end as command,
  pg_get_expr(pol.polqual, pol.polrelid) as definition,
  pg_get_expr(pol.polwithcheck, pol.polrelid) as check
from
  pg_policy pol
  join pg_class c on c.oid = pol.polrelid
  left join pg_namespace n on n.oid = c.relnamespace
`,V=t.z.object({id:t.z.number(),schema:t.z.string(),table:t.z.string(),table_id:t.z.number(),name:t.z.string(),action:t.z.union([t.z.literal("PERMISSIVE"),t.z.literal("RESTRICTIVE")]),roles:t.z.array(t.z.string()),command:t.z.union([t.z.literal("SELECT"),t.z.literal("INSERT"),t.z.literal("UPDATE"),t.z.literal("DELETE"),t.z.literal("ALL")]),definition:t.z.union([t.z.string(),t.z.null()]),check:t.z.union([t.z.string(),t.z.null()])}),J=t.z.array(V),K=t.z.optional(V);e.s(["default",0,{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l}={}){let o=n.safeSql`
    with policies as (${Q})
    select *
    from policies
    `,c=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return c&&(o=n.safeSql`${o}where schema ${c}`),s&&(o=n.safeSql`${o} limit ${(0,n.literal)(s)}`),l&&(o=n.safeSql`${o} offset ${(0,n.literal)(l)}`),{sql:o,zod:J}},retrieve:function(e){return{sql:n.safeSql`with policies as (${Q}) select * from policies where ${function(e){if("id"in e&&e.id)return n.safeSql`id = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name&&e.schema&&e.table)return n.safeSql`name = ${(0,n.literal)(e.name)} AND schema = ${(0,n.literal)(e.schema)} AND table = ${(0,n.literal)(e.table)}`;throw Error("Must provide either id or name, schema and table")}(e)};`,zod:K}},create:function({name:e,schema:t="public",table:a,definition:i,check:r,action:s="PERMISSIVE",command:l="ALL",roles:o=["public"]}){return{sql:`
create policy ${(0,n.ident)(e)} on ${(0,n.ident)(t)}.${(0,n.ident)(a)}
  as ${s}
  for ${l}
  to ${o.map(n.ident).join(",")}
  ${i?`using (${i})`:""}
  ${r?`with check (${r})`:""};`}},update:function(e,t){let{name:a,definition:i,check:r,roles:s}=t,l=`ALTER POLICY ${(0,n.ident)(e.name)} ON ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)}`,o=void 0===a?"":`${l} RENAME TO ${(0,n.ident)(a)};`,c=void 0===i?"":`${l} USING (${i});`,d=void 0===r?"":`${l} WITH CHECK (${r});`,_=void 0===s?"":`${l} TO ${s.map(n.ident).join(",")};`;return{sql:`BEGIN; ${c} ${d} ${_} ${o} COMMIT;`}},remove:function(e){return{sql:n.safeSql`DROP POLICY ${(0,n.ident)(e.name)} ON ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)};`}},zod:V}],201049);let Z=n.safeSql`
SELECT
  p.oid :: int8 AS id,
  p.pubname AS name,
  p.pubowner::regrole::text AS owner,
  p.pubinsert AS publish_insert,
  p.pubupdate AS publish_update,
  p.pubdelete AS publish_delete,
  p.pubtruncate AS publish_truncate,
  CASE
    WHEN p.puballtables THEN NULL
    ELSE pr.tables
  END AS tables
FROM
  pg_catalog.pg_publication AS p
  LEFT JOIN LATERAL (
    SELECT
      COALESCE(
        array_agg(
          json_build_object(
            'id',
            c.oid :: int8,
            'name',
            c.relname,
            'schema',
            nc.nspname
          )
        ),
        '{}'
      ) AS tables
    FROM
      pg_catalog.pg_publication_rel AS pr
      JOIN pg_class AS c ON pr.prrelid = c.oid
      join pg_namespace as nc on c.relnamespace = nc.oid
    WHERE
      pr.prpubid = p.oid
  ) AS pr ON 1 = 1
`,ee=t.z.object({id:t.z.number().optional(),name:t.z.string(),schema:t.z.string()}),et=t.z.object({id:t.z.number(),name:t.z.string(),owner:t.z.string(),publish_insert:t.z.boolean(),publish_update:t.z.boolean(),publish_delete:t.z.boolean(),publish_truncate:t.z.boolean(),tables:t.z.array(ee).nullable()}),ea=t.z.array(et),en=t.z.optional(et);e.s(["default",0,{list:function({limit:e,offset:t}={}){let a=n.safeSql`with publications as (${Z}) select * from publications`;return e&&(a=n.safeSql`${a} limit ${(0,n.literal)(e)}`),t&&(a=n.safeSql`${a} offset ${(0,n.literal)(t)}`),{sql:a,zod:ea}},retrieve:function(e){return{sql:n.safeSql`with publications as (${Z}) select * from publications where ${function(e){if("id"in e&&e.id)return n.safeSql`${(0,n.ident)("id")} = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name)return n.safeSql`${(0,n.ident)("name")} = ${(0,n.literal)(e.name)}`;throw Error("Must provide either id or name")}(e)};`,zod:en}},create:function({name:e,publish_insert:t=!1,publish_update:a=!1,publish_delete:i=!1,publish_truncate:r=!1,tables:s=null}){let l;l=null==s?n.safeSql`FOR ALL TABLES`:0===s.length?n.safeSql``:n.safeSql`FOR TABLE ${(0,n.joinSqlFragments)(s.map(e=>{if(!e.includes("."))return(0,n.ident)(e);let[t,...a]=e.split("."),i=a.join(".");return n.safeSql`${(0,n.ident)(t)}.${(0,n.ident)(i)}`}),",")}`;let o=[];return t&&o.push("insert"),a&&o.push("update"),i&&o.push("delete"),r&&o.push("truncate"),{sql:n.safeSql`
CREATE PUBLICATION ${(0,n.ident)(e)} ${l}
  WITH (publish = ${(0,n.literal)(o.join(","))});`}},update:function(e,{name:t,owner:a,publish_insert:i,publish_update:r,publish_delete:s,publish_truncate:l,tables:o}){return{sql:n.safeSql`
do $$
declare
  id oid := ${(0,n.literal)(e)};
  old record;
  new_name text := ${void 0===t?(0,n.literal)(null):(0,n.literal)(t)};
  new_owner text := ${void 0===a?(0,n.literal)(null):(0,n.literal)(a)};
  new_publish_insert bool := ${(0,n.literal)(i??null)};
  new_publish_update bool := ${(0,n.literal)(r??null)};
  new_publish_delete bool := ${(0,n.literal)(s??null)};
  new_publish_truncate bool := ${(0,n.literal)(l??null)};
  new_tables text := ${void 0===o?(0,n.literal)(null):(0,n.literal)(null===o?"all tables":o.map(e=>{if(!e.includes("."))return(0,n.ident)(e);let[t,...a]=e.split("."),i=a.join(".");return n.safeSql`${(0,n.ident)(t)}.${(0,n.ident)(i)}`}).join(","))};
begin
  select * into old from pg_publication where oid = id;
  if old is null then
    raise exception 'Cannot find publication with id %', id;
  end if;

  if new_tables is null then
    null;
  elsif new_tables = 'all tables' then
    if old.puballtables then
      null;
    else
      -- Need to recreate because going from list of tables <-> all tables with alter is not possible.
      execute(format('drop publication %1$I; create publication %1$I for all tables;', old.pubname));
    end if;
  else
    if old.puballtables then
      -- Need to recreate because going from list of tables <-> all tables with alter is not possible.
      execute(format('drop publication %1$I; create publication %1$I;', old.pubname));
    elsif exists(select from pg_publication_rel where prpubid = id) then
      execute(
        format(
          'alter publication %I drop table %s',
          old.pubname,
          (select string_agg(prrelid::regclass::text, ', ') from pg_publication_rel where prpubid = id)
        )
      );
    end if;

    -- At this point the publication must have no tables.

    if new_tables != '' then
      execute(format('alter publication %I add table %s', old.pubname, new_tables));
    end if;
  end if;

  execute(
    format(
      'alter publication %I set (publish = %L);',
      old.pubname,
      concat_ws(
        ', ',
        case when coalesce(new_publish_insert, old.pubinsert) then 'insert' end,
        case when coalesce(new_publish_update, old.pubupdate) then 'update' end,
        case when coalesce(new_publish_delete, old.pubdelete) then 'delete' end,
        case when coalesce(new_publish_truncate, old.pubtruncate) then 'truncate' end
      )
    )
  );

  execute(format('alter publication %I owner to %I;', old.pubname, coalesce(new_owner, old.pubowner::regrole::name)));

  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if new_name is not null and new_name != old.pubname then
    execute(format('alter publication %I rename to %I;', old.pubname, coalesce(new_name, old.pubname)));
  end if;

  -- We need to retrieve the publication later, so we need a way to uniquely identify which publication this is.
  -- We can't rely on id because it gets changed if it got recreated.
  -- We use a temp table to store the unique name - DO blocks can't return a value.
  create temp table pg_meta_publication_tmp (name) on commit drop as values (coalesce(new_name, old.pubname));
end $$;
`}},remove:function(e){return{sql:n.safeSql`DROP PUBLICATION IF EXISTS ${(0,n.ident)(e.name)};`}},zod:et}],557928);let ei=n.safeSql`
-- Can't use pg_authid here since some managed Postgres providers don't expose it
-- https://github.com/supabase/postgres-meta/issues/212

select
  r.oid as id,
  rolname as name,
  rolsuper as "isSuperuser",
  rolcreatedb as "canCreateDb",
  rolcreaterole as "canCreateRole",
  rolinherit as "inheritRole",
  rolcanlogin as "canLogin",
  rolreplication as "isReplicationRole",
  rolbypassrls as "canBypassRls",
  (
    select
      count(*)
    from
      pg_stat_activity
    where
      r.rolname = pg_stat_activity.usename
  ) as "activeConnections",
  case when rolconnlimit = -1 then current_setting('max_connections') :: int8
       else rolconnlimit
  end as "connectionLimit",
  rolvaliduntil as "validUntil",
  coalesce(r_config.role_configs, '{}') as config
from
  pg_roles r
  left join (
    select
      oid,
      jsonb_object_agg(param, value) filter (where param is not null) as role_configs
    from
      (
        select
          oid,
          (string_to_array(unnest(rolconfig), '='))[1] as param,
          (string_to_array(unnest(rolconfig), '='))[2] as value
        from
          pg_roles
      ) as _
    group by
      oid
  ) r_config on r_config.oid = r.oid
`,er=t.z.object({id:t.z.number(),name:t.z.string(),isSuperuser:t.z.boolean(),canCreateDb:t.z.boolean(),canCreateRole:t.z.boolean(),inheritRole:t.z.boolean(),canLogin:t.z.boolean(),isReplicationRole:t.z.boolean(),canBypassRls:t.z.boolean(),activeConnections:t.z.number(),connectionLimit:t.z.number(),validUntil:t.z.union([t.z.string(),t.z.null()]),config:t.z.record(t.z.string(),t.z.string())}),es=t.z.array(er),el=t.z.optional(er);function eo(e){if("id"in e&&e.id)return n.safeSql`${(0,n.ident)("id")} = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name)return n.safeSql`${(0,n.ident)("name")} = ${(0,n.literal)(e.name)}`;throw Error("Must provide either id or name")}e.s(["default",0,{list:function({includeDefaultRoles:e=!1,limit:t,offset:a}={}){let i=n.safeSql`
with
  roles as (${ei})
select
  *
from
  roles
where
  true
`;return e||(i=n.safeSql`${i} and not pg_catalog.starts_with(name, 'pg_')`),t&&(i=n.safeSql`${i} limit ${(0,n.literal)(t)}`),a&&(i=n.safeSql`${i} offset ${(0,n.literal)(a)}`),{sql:i,zod:es}},retrieve:function(e){return{sql:n.safeSql`with roles as (${ei}) select * from roles where ${eo(e)};`,zod:el}},create:function({name:e,isSuperuser:t=!1,canCreateDb:a=!1,canCreateRole:i=!1,inheritRole:r=!0,canLogin:s=!1,isReplicationRole:l=!1,canBypassRls:o=!1,connectionLimit:c=-1,password:d,validUntil:_,memberOf:p=[],members:m=[],admins:u=[],config:E={}}){return{sql:n.safeSql`
create role ${(0,n.ident)(e)}
  ${t?n.safeSql`superuser`:n.safeSql``}
  ${a?n.safeSql`createdb`:n.safeSql``}
  ${i?n.safeSql`createrole`:n.safeSql``}
  ${r?n.safeSql``:n.safeSql`noinherit`}
  ${s?n.safeSql`login`:n.safeSql``}
  ${l?n.safeSql`replication`:n.safeSql``}
  ${o?n.safeSql`bypassrls`:n.safeSql``}
  connection limit ${(0,n.literal)(c)}
  ${void 0===d?n.safeSql``:n.safeSql`password ${(0,n.literal)(d)}`}
  ${void 0===_?n.safeSql``:n.safeSql`valid until ${(0,n.literal)(_)}`}
  ${0===p.length?n.safeSql``:n.safeSql`in role ${(0,n.joinSqlFragments)(p.map(n.ident),",")}`}
  ${0===m.length?n.safeSql``:n.safeSql`role ${(0,n.joinSqlFragments)(m.map(n.ident),",")}`}
  ${0===u.length?n.safeSql``:n.safeSql`admin ${(0,n.joinSqlFragments)(u.map(n.ident),",")}`}
  ;
${(0,n.joinSqlFragments)(Object.entries(E).map(([t,a])=>n.safeSql`alter role ${(0,n.ident)(e)} set ${(0,n.ident)(t)} = ${(0,n.literal)(a)};`),"\n")}
`}},update:function(e,t){let{name:a,isSuperuser:i,canCreateDb:r,canCreateRole:s,inheritRole:l,canLogin:o,isReplicationRole:c,canBypassRls:d,connectionLimit:_,password:p,validUntil:m}=t;return{sql:n.safeSql`
do $$
declare
  old record;
begin
  with roles as (${ei})
  select * into old from roles where ${eo(e)};
  if old is null then
    raise exception 'Cannot find role with id %', id;
  end if;

  execute(format('alter role %I
    ${void 0===i?n.safeSql``:i?n.safeSql`superuser`:n.safeSql`nosuperuser`}
    ${void 0===r?n.safeSql``:r?n.safeSql`createdb`:n.safeSql`nocreatedb`}
    ${void 0===s?n.safeSql``:s?n.safeSql`createrole`:n.safeSql`nocreaterole`}
    ${void 0===l?n.safeSql``:l?n.safeSql`inherit`:n.safeSql`noinherit`}
    ${void 0===o?n.safeSql``:o?n.safeSql`login`:n.safeSql`nologin`}
    ${void 0===c?n.safeSql``:c?n.safeSql`replication`:n.safeSql`noreplication`}
    ${void 0===d?n.safeSql``:d?n.safeSql`bypassrls`:n.safeSql`nobypassrls`}
    ${void 0===_?n.safeSql``:n.safeSql`connection limit ${(0,n.literal)(_)}`}
    ${void 0===p?n.safeSql``:n.safeSql`password ${(0,n.literal)(p)}`}
    ${void 0===m?n.safeSql``:n.safeSql`valid until %L`}
  ', old.name${void 0===m?n.safeSql``:n.safeSql`, ${(0,n.literal)(m)}`}));

  ${void 0===a?n.safeSql``:n.safeSql`
  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if ${(0,n.literal)(a)} != old.name then
    execute(format('alter role %I rename to %I;', old.name, ${(0,n.literal)(a)}));
  end if;
  `}
end
$$;
`}},remove:function(e,{ifExists:t=!1}={}){return{sql:n.safeSql`
do $$
declare
  old record;
begin
  with roles as (${ei})
  select * into old from roles where ${eo(e)};
  if old is null then
    raise exception 'Cannot find role with id %', id;
  end if;

  execute(format('drop role ${t?n.safeSql`if exists`:n.safeSql``} %I;', old.name));
end
$$;
`}},zod:er}],567205);let ec=n.safeSql`
-- Adapted from information_schema.schemata

select
  n.oid as id,
  n.nspname as name,
  u.rolname as owner,
   obj_description(n.oid, 'pg_namespace') AS comment
from
  pg_namespace n,
  pg_roles u
where
  n.nspowner = u.oid
  and (
    pg_has_role(n.nspowner, 'USAGE')
    or has_schema_privilege(n.oid, 'CREATE, USAGE')
  )
  and not pg_catalog.starts_with(n.nspname, 'pg_temp_')
  and not pg_catalog.starts_with(n.nspname, 'pg_toast_temp_')
`,ed=t.z.object({id:t.z.number(),name:t.z.string(),owner:t.z.string(),comment:t.z.string().nullable()}),e_=t.z.array(ed),ep=t.z.optional(ed);e.s(["default",0,{list:function({includeSystemSchemas:e=!1,limit:t,offset:i}={}){let r=ec;return e||(r=n.safeSql`${r} and not (n.nspname in (${(0,n.joinSqlFragments)(a.DEFAULT_SYSTEM_SCHEMAS.map(n.literal),",")}))`),t&&(r=n.safeSql`${r} limit ${(0,n.literal)(t)}`),i&&(r=n.safeSql`${r} offset ${(0,n.literal)(i)}`),{sql:r,zod:e_}},retrieve:function({id:e,name:t}){return e?{sql:n.safeSql`${ec} and n.oid = ${(0,n.literal)(e)};`,zod:ep}:{sql:n.safeSql`${ec} and n.nspname = ${(0,n.literal)(t)};`,zod:ep}},create:function({name:e,owner:t}){return{sql:n.safeSql`create schema ${(0,n.ident)(e)}
  ${void 0===t?n.safeSql``:n.safeSql`authorization ${(0,n.ident)(t)}`};
`}},update:function({id:e,name:t},{name:a,owner:i}){return{sql:n.safeSql`
do $$
declare
  id oid := ${void 0===e?n.safeSql`${(0,n.literal)(t)}::regnamespace`:(0,n.literal)(e)};
  old record;
  new_name text := ${void 0===a?(0,n.literal)(null):(0,n.literal)(a)};
  new_owner text := ${void 0===i?(0,n.literal)(null):(0,n.literal)(i)};
begin
  select * into old from pg_namespace where oid = id;
  if old is null then
    raise exception 'Cannot find schema with id %', id;
  end if;

  if new_owner is not null then
    execute(format('alter schema %I owner to %I;', old.nspname, new_owner));
  end if;

  -- Using the same name in the rename clause gives an error, so only do it if the new name is different.
  if new_name is not null and new_name != old.nspname then
    execute(format('alter schema %I rename to %I;', old.nspname, new_name));
  end if;
end
$$;
`}},remove:function({id:e,name:t},{cascade:a=!1}={}){return{sql:n.safeSql`
do $$
declare
  id oid := ${void 0===e?n.safeSql`${(0,n.literal)(t)}::regnamespace`:(0,n.literal)(e)};
  old record;
  cascade bool := ${(0,n.literal)(a)};
begin
  select * into old from pg_namespace where oid = id;
  if old is null then
    raise exception 'Cannot find schema with id %', id;
  end if;

  execute(format('drop schema %I %s;', old.nspname, case when cascade then 'cascade' else 'restrict' end));
end
$$;
`}},zod:ed}],912920);let em=n.safeSql`
-- Despite the name \`table_privileges\`, this includes other kinds of relations:
-- views, matviews, etc. "Relation privileges" just doesn't roll off the tongue.
--
-- For each relation, get its relacl in a jsonb format,
-- e.g.
--
-- '{postgres=arwdDxt/postgres}'
--
-- becomes
--
-- [
--   {
--     "grantee": "postgres",
--     "grantor": "postgres",
--     "is_grantable": false,
--     "privilege_type": "INSERT"
--   },
--   ...
-- ]
select
  c.oid as relation_id,
  nc.nspname as schema,
  c.relname as name,
  case
    when c.relkind = 'r' then 'table'
    when c.relkind = 'v' then 'view'
    when c.relkind = 'm' then 'materialized_view'
    when c.relkind = 'f' then 'foreign_table'
    when c.relkind = 'p' then 'partitioned_table'
  end as kind,
  coalesce(
    jsonb_agg(
      jsonb_build_object(
        'grantor', grantor.rolname,
        'grantee', grantee.rolname,
        'privilege_type', _priv.privilege_type,
        'is_grantable', _priv.is_grantable
      )
    ) filter (where _priv is not null),
    '[]'
  ) as privileges
from pg_class c
join pg_namespace as nc
  on nc.oid = c.relnamespace
left join lateral (
  select grantor, grantee, privilege_type, is_grantable
  from aclexplode(coalesce(c.relacl, acldefault('r', c.relowner)))
) as _priv on true
left join pg_roles as grantor
  on grantor.oid = _priv.grantor
left join (
  select
    pg_roles.oid,
    pg_roles.rolname
  from pg_roles
  union all
  select
    (0)::oid as oid, 'PUBLIC'
) as grantee (oid, rolname)
  on grantee.oid = _priv.grantee
where c.relkind in ('r', 'v', 'm', 'f', 'p')
  and not pg_is_other_temp_schema(c.relnamespace)
  and (
    pg_has_role(c.relowner, 'USAGE')
    or has_table_privilege(
      c.oid,
      'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
      || case when current_setting('server_version_num')::int4 >= 170000 then ', MAINTAIN' else '' end
    )
    or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
  )
group by
  c.oid,
  nc.nspname,
  c.relname,
  c.relkind
`,eu=t.z.object({relation_id:t.z.number(),schema:t.z.string(),name:t.z.string(),kind:t.z.union([t.z.literal("table"),t.z.literal("view"),t.z.literal("materialized_view"),t.z.literal("foreign_table"),t.z.literal("partitioned_table")]),privileges:t.z.array(t.z.object({grantor:t.z.string(),grantee:t.z.string(),privilege_type:t.z.union([t.z.literal("SELECT"),t.z.literal("INSERT"),t.z.literal("UPDATE"),t.z.literal("DELETE"),t.z.literal("TRUNCATE"),t.z.literal("REFERENCES"),t.z.literal("TRIGGER"),t.z.literal("MAINTAIN")]),is_grantable:t.z.boolean()}))}),eE=t.z.array(eu),eg=t.z.optional(eu);e.s(["default",0,{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l}={}){let o=n.safeSql`
with table_privileges as (${em})
select *
from table_privileges
`,c=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return c&&(o=n.safeSql`${o} where schema ${c}`),s&&(o=n.safeSql`${o} limit ${(0,n.literal)(s)}`),l&&(o=n.safeSql`${o} offset ${(0,n.literal)(l)}`),{sql:o,zod:eE}},retrieve:function({id:e,name:t,schema:a="public"}){return e?{sql:n.safeSql`
with table_privileges as (${em})
select *
from table_privileges
where table_privileges.relation_id = ${(0,n.literal)(e)};`,zod:eg}:{sql:n.safeSql`
with table_privileges as (${em})
select *
from table_privileges
where table_privileges.schema = ${(0,n.literal)(a)}
  and table_privileges.name = ${(0,n.literal)(t)}
`,zod:eg}},grant:function(e){return{sql:n.safeSql`
do $$
begin
${(0,n.joinSqlFragments)(e.map(({privilegeType:e,relationId:t,grantee:a,isGrantable:i})=>n.safeSql`execute format('grant ${(0,n.keyword)(e)} on table %s to ${"public"===a.toLowerCase()?n.safeSql`public`:(0,n.ident)(a)} ${i?n.safeSql`with grant option`:n.safeSql``}', ${(0,n.literal)(t)}::regclass);`),"\n")}
end $$;
`}},revoke:function(e){return{sql:n.safeSql`
do $$
begin
${(0,n.joinSqlFragments)(e.map(({privilegeType:e,relationId:t,grantee:a})=>n.safeSql`execute format('revoke ${(0,n.keyword)(e)} on table %s from ${"public"===a.toLowerCase()?n.safeSql`public`:(0,n.ident)(a)}', ${(0,n.literal)(t)}::regclass);`),"\n")}
end $$;
`}},zod:eu}],454430);let ef=n.safeSql`
SELECT
  c.oid :: int8 AS id,
  nc.nspname AS schema,
  c.relname AS name,
  c.relrowsecurity AS rls_enabled,
  c.relforcerowsecurity AS rls_forced,
  CASE
    WHEN c.relreplident = 'd' THEN 'DEFAULT'
    WHEN c.relreplident = 'i' THEN 'INDEX'
    WHEN c.relreplident = 'f' THEN 'FULL'
    ELSE 'NOTHING'
  END AS replica_identity,
  pg_total_relation_size(format('%I.%I', nc.nspname, c.relname)) :: int8 AS bytes,
  pg_size_pretty(
    pg_total_relation_size(format('%I.%I', nc.nspname, c.relname))
  ) AS size,
  pg_stat_get_live_tuples(c.oid) AS live_rows_estimate,
  pg_stat_get_dead_tuples(c.oid) AS dead_rows_estimate,
  obj_description(c.oid) AS comment,
  coalesce(pk.primary_keys, '[]') as primary_keys,
  coalesce(
    jsonb_agg(relationships) filter (where relationships is not null),
    '[]'
  ) as relationships
FROM
  pg_namespace nc
  JOIN pg_class c ON nc.oid = c.relnamespace
  left join (
    select
      c.oid::int8 as table_id,
      jsonb_agg(
        jsonb_build_object(
          'table_id', c.oid::int8,
          'schema', n.nspname,
          'table_name', c.relname,
          'name', a.attname
        )
        order by array_position(i.indkey, a.attnum)
      ) as primary_keys
    from
      pg_index i
      join pg_class c on i.indrelid = c.oid
      join pg_namespace n on c.relnamespace = n.oid
      join pg_attribute a on a.attrelid = c.oid and a.attnum = any(i.indkey)
    where
      i.indisprimary
    group by c.oid
  ) as pk
  on pk.table_id = c.oid
  left join (
    select
      c.oid :: int8 as id,
      c.conname as constraint_name,
      nsa.nspname as source_schema,
      csa.relname as source_table_name,
      sa.attname as source_column_name,
      nta.nspname as target_table_schema,
      cta.relname as target_table_name,
      ta.attname as target_column_name
    from
      pg_constraint c
    join (
      pg_attribute sa
      join pg_class csa on sa.attrelid = csa.oid
      join pg_namespace nsa on csa.relnamespace = nsa.oid
    ) on sa.attrelid = c.conrelid and sa.attnum = any (c.conkey)
    join (
      pg_attribute ta
      join pg_class cta on ta.attrelid = cta.oid
      join pg_namespace nta on cta.relnamespace = nta.oid
    ) on ta.attrelid = c.confrelid and ta.attnum = any (c.confkey)
    where
      c.contype = 'f'
  ) as relationships
  on (relationships.source_schema = nc.nspname and relationships.source_table_name = c.relname)
  or (relationships.target_table_schema = nc.nspname and relationships.target_table_name = c.relname)
WHERE
  c.relkind IN ('r', 'p')
  AND NOT pg_is_other_temp_schema(nc.oid)
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_table_privilege(
      c.oid,
      'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
    )
    OR has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
  )
group by
  c.oid,
  c.relname,
  c.relrowsecurity,
  c.relforcerowsecurity,
  c.relreplident,
  nc.nspname,
  pk.primary_keys
`,eb=t.z.object({table_id:t.z.number(),name:t.z.string(),schema:t.z.string(),table_name:t.z.string()}),eh=t.z.object({id:t.z.number(),constraint_name:t.z.string(),source_schema:t.z.string(),source_table_name:t.z.string(),source_column_name:t.z.string(),target_table_schema:t.z.string(),target_table_name:t.z.string(),target_column_name:t.z.string()}),eS=t.z.object({id:t.z.number(),schema:t.z.string(),name:t.z.string(),rls_enabled:t.z.boolean(),rls_forced:t.z.boolean(),replica_identity:t.z.enum(["DEFAULT","INDEX","FULL","NOTHING"]),bytes:t.z.number(),size:t.z.string(),live_rows_estimate:t.z.number(),dead_rows_estimate:t.z.number(),comment:t.z.string().nullable(),primary_keys:t.z.array(eb),relationships:t.z.array(eh),columns:p.optional()}),eN=t.z.array(eS);function eT({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l,includeColumns:o=!0}={}){let c=eA({includeColumns:o}),d=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return d&&(c=n.safeSql`${c} where schema ${d}`),s&&(c=n.safeSql`${c} limit ${(0,n.literal)(s)}`),l&&(c=n.safeSql`${c} offset ${(0,n.literal)(l)}`),{sql:c,zod:eN}}function e$(e){let t=function(e){if("id"in e&&e.id)return n.safeSql`${(0,n.ident)("id")} = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name&&e.schema)return n.safeSql`${(0,n.ident)("name")} = ${(0,n.literal)(e.name)} and ${(0,n.ident)("schema")} = ${(0,n.literal)(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);return{sql:n.safeSql`${eA({includeColumns:!0})} where ${t};`,zod:eS}}function ev(e,{cascade:t=!1}={}){return{sql:n.safeSql`DROP TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.name)} ${t?n.safeSql`CASCADE`:n.safeSql`RESTRICT`};`}}let eA=({includeColumns:e})=>n.safeSql`
  with tables as (${ef})
  ${e?n.safeSql`, columns as (${d})`:n.safeSql``}
  select
    *
    ${e?n.safeSql`, ${i("columns",n.safeSql`columns.table_id = tables.id`)}`:n.safeSql``}
  from tables`;function eI({name:e,schema:t="public",comment:a,no_transaction:i=!1}){let r=n.safeSql`CREATE TABLE ${(0,n.ident)(t)}.${(0,n.ident)(e)} ();`,s=void 0!=a?n.safeSql`COMMENT ON TABLE ${(0,n.ident)(t)}.${(0,n.ident)(e)} IS ${(0,n.literal)(a)};`:n.safeSql``;return i?{sql:n.safeSql`${r} ${s}`}:{sql:n.safeSql`BEGIN; ${r} ${s} COMMIT;`}}function eR(e,{name:t,schema:a,rls_enabled:i,rls_forced:r,replica_identity:s,replica_identity_index:l,primary_keys:o,comment:c}){let d=n.safeSql`ALTER TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.name)}`,_=void 0===a?n.safeSql``:n.safeSql`${d} SET SCHEMA ${(0,n.ident)(a)};`,p=n.safeSql``;if(void 0!==t&&t!==e.name){let i=void 0===a?e.schema:a;p=n.safeSql`ALTER TABLE ${(0,n.ident)(i)}.${(0,n.ident)(e.name)} RENAME TO ${(0,n.ident)(t)};`}let m=n.safeSql``;if(void 0!==i){let e=n.safeSql`${d} ENABLE ROW LEVEL SECURITY;`,t=n.safeSql`${d} DISABLE ROW LEVEL SECURITY;`;m=i?e:t}let u=n.safeSql``;if(void 0!==r){let e=n.safeSql`${d} FORCE ROW LEVEL SECURITY;`,t=n.safeSql`${d} NO FORCE ROW LEVEL SECURITY;`;u=r?e:t}let E=n.safeSql``;void 0===s||(E="INDEX"===s?n.safeSql`${d} REPLICA IDENTITY USING INDEX ${(0,n.ident)(l)};`:n.safeSql`${d} REPLICA IDENTITY ${(0,n.keyword)(s)};`);let g=n.safeSql``;void 0===o||(g=n.safeSql`${g}
DO $$
DECLARE
  r record;
BEGIN
  SELECT conname
    INTO r
    FROM pg_constraint
    WHERE contype = 'p' AND conrelid = ${(0,n.literal)(e.id)};
  IF r IS NOT NULL THEN
    EXECUTE ${(0,n.literal)(`${d} DROP CONSTRAINT `)} || quote_ident(r.conname);
  END IF;
END
$$;
`,0===o.length||(g=n.safeSql`${g} ${d} ADD PRIMARY KEY (${(0,n.joinSqlFragments)(o.map(e=>(0,n.ident)(e.name)),",")});`));let f=void 0==c?n.safeSql``:n.safeSql`COMMENT ON TABLE ${(0,n.ident)(e.schema)}.${(0,n.ident)(e.name)} IS ${(0,n.literal)(c)};`;return{sql:n.safeSql`
BEGIN;
  ${m}
  ${u}
  ${E}
  ${g}
  ${f}
  ${_}
  ${p}
COMMIT;`}}e.s(["create",()=>eI,"list",()=>eT,"remove",()=>ev,"retrieve",()=>e$,"update",()=>eR],330006);let eL=n.safeSql`
SELECT
  pg_t.oid AS id,
  pg_t.tgrelid AS table_id,
  CASE
    WHEN pg_t.tgenabled = 'D' THEN 'DISABLED'
    WHEN pg_t.tgenabled = 'O' THEN 'ORIGIN'
    WHEN pg_t.tgenabled = 'R' THEN 'REPLICA'
    WHEN pg_t.tgenabled = 'A' THEN 'ALWAYS'
  END AS enabled_mode,
  (
    STRING_TO_ARRAY(
      ENCODE(pg_t.tgargs, 'escape'), '\\000'
    )
  )[:pg_t.tgnargs] AS function_args,
  is_t.trigger_name AS name,
  is_t.event_object_table AS table,
  is_t.event_object_schema AS schema,
  is_t.action_condition AS condition,
  is_t.action_orientation AS orientation,
  is_t.action_timing AS activation,
  ARRAY_AGG(is_t.event_manipulation)::text[] AS events,
  pg_p.proname AS function_name,
  pg_n.nspname AS function_schema
FROM
  pg_trigger AS pg_t
JOIN
  pg_class AS pg_c
ON pg_t.tgrelid = pg_c.oid
JOIN information_schema.triggers AS is_t
ON is_t.trigger_name = pg_t.tgname
AND pg_c.relname = is_t.event_object_table
AND pg_c.relnamespace = (quote_ident(is_t.event_object_schema))::regnamespace
JOIN pg_proc AS pg_p
ON pg_t.tgfoid = pg_p.oid
JOIN pg_namespace AS pg_n
ON pg_p.pronamespace = pg_n.oid
GROUP BY
  pg_t.oid,
  pg_t.tgrelid,
  pg_t.tgenabled,
  pg_t.tgargs,
  pg_t.tgnargs,
  is_t.trigger_name,
  is_t.event_object_table,
  is_t.event_object_schema,
  is_t.action_condition,
  is_t.action_orientation,
  is_t.action_timing,
  pg_p.proname,
  pg_n.nspname
`,ey=t.z.object({id:t.z.number(),table_id:t.z.number(),enabled_mode:t.z.enum(["DISABLED","ORIGIN","REPLICA","ALWAYS"]),function_args:t.z.array(t.z.string()),name:t.z.string(),table:t.z.string(),schema:t.z.string(),condition:t.z.string().nullable(),orientation:t.z.string(),activation:t.z.string(),events:t.z.array(t.z.string()),function_name:t.z.string(),function_schema:t.z.string()}),eO=t.z.array(ey),eC=t.z.optional(ey);t.z.object({name:t.z.string(),schema:t.z.string().optional().default("public"),table:t.z.string(),function_schema:t.z.string().optional().default("public"),function_name:t.z.string(),function_args:t.z.array(t.z.string()).optional(),activation:t.z.enum(["BEFORE","AFTER","INSTEAD OF"]),events:t.z.array(t.z.string()),orientation:t.z.enum(["ROW","STATEMENT"]).optional(),condition:t.z.string().optional()}),t.z.object({name:t.z.string().optional(),enabled_mode:t.z.enum(["ORIGIN","REPLICA","ALWAYS","DISABLED"]).optional()}),e.s(["default",0,{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l}={}){let o=n.safeSql`with triggers as (${eL}) select * from triggers`,c=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return c&&(o=n.safeSql`${o} where schema ${c}`),s&&(o=n.safeSql`${o} limit ${(0,n.literal)(s)}`),l&&(o=n.safeSql`${o} offset ${(0,n.literal)(l)}`),{sql:o,zod:eO}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return n.safeSql`${(0,n.ident)("id")} = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name&&e.table&&e.schema)return n.safeSql`${(0,n.ident)("name")} = ${(0,n.literal)(e.name)} and ${(0,n.ident)("schema")} = ${(0,n.literal)(e.schema)} and ${(0,n.ident)("table")} = ${(0,n.literal)(e.table)}`;throw Error("Must provide either id or name, schema and table")}(e);return{sql:n.safeSql`with triggers as (${eL}) select * from triggers where ${t};`,zod:eC}},create:function({name:e,schema:a="public",table:i,function_schema:r="public",function_name:s,function_args:l=[],activation:o,events:c,orientation:d,condition:_}){let p=`${(0,n.ident)(a)}.${(0,n.ident)(i)}`,m=`${(0,n.ident)(r)}.${(0,n.ident)(s)}`,u=c.join(" or "),E=d?`for each ${d}`:"",g=_?`when (${_})`:"",f=l.map(n.literal).join(",");return{sql:`create trigger ${(0,n.ident)(e)} ${o} ${u} on ${p} ${E} ${g} execute function ${m}(${f});`,zod:t.z.void()}},update:function(e,a){let i=n.safeSql`${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)}`,r=n.safeSql``;switch(a.enabled_mode){case"ORIGIN":r=n.safeSql`alter table ${i} enable trigger ${(0,n.ident)(e.name)};`;break;case"DISABLED":r=n.safeSql`alter table ${i} disable trigger ${(0,n.ident)(e.name)};`;break;case"REPLICA":case"ALWAYS":r=n.safeSql`alter table ${i} enable ${(0,n.keyword)(a.enabled_mode)} trigger ${(0,n.ident)(e.name)};`}let s=a.name&&a.name!==e.name?n.safeSql`alter trigger ${(0,n.ident)(e.name)} on ${i} rename to ${(0,n.ident)(a.name)};`:n.safeSql``;return{sql:n.safeSql`begin; ${r}; ${s}; commit;`,zod:t.z.void()}},remove:function(e,{cascade:a=!1}={}){let i=n.safeSql`${(0,n.ident)(e.schema)}.${(0,n.ident)(e.table)}`;return{sql:n.safeSql`drop trigger ${(0,n.ident)(e.name)} on ${i} ${a?n.safeSql`cascade`:n.safeSql``};`,zod:t.z.void()}},zod:ey}],819615);let eq=n.safeSql`
select
  t.oid::int8 as id,
  t.typname as name,
  n.nspname as schema,
  format_type (t.oid, null) as format,
  coalesce(t_enums.enums, '[]') as enums,
  coalesce(t_attributes.attributes, '[]') as attributes,
  obj_description (t.oid, 'pg_type') as comment
from
  pg_type t
  left join pg_namespace n on n.oid = t.typnamespace
  left join (
    select
      enumtypid,
      jsonb_agg(enumlabel order by enumsortorder) as enums
    from
      pg_enum
    group by
      enumtypid
  ) as t_enums on t_enums.enumtypid = t.oid
  left join (
    select
      oid,
      jsonb_agg(
        jsonb_build_object('name', a.attname, 'type_id', a.atttypid::int8)
        order by a.attnum asc
      ) as attributes
    from
      pg_class c
      join pg_attribute a on a.attrelid = c.oid
    where
      c.relkind = 'c' and not a.attisdropped
    group by
      c.oid
  ) as t_attributes on t_attributes.oid = t.typrelid
where
  (
    t.typrelid = 0
    or (
      select
        c.relkind = 'c'
      from
        pg_class c
      where
        c.oid = t.typrelid
    )
  )
`,ew=t.z.object({id:t.z.number(),name:t.z.string(),schema:t.z.string(),format:t.z.string(),enums:t.z.array(t.z.string()),attributes:t.z.array(t.z.object({name:t.z.string(),type_id:t.z.number()})),comment:t.z.string().nullable()}),eD=t.z.array(ew);e.s(["default",0,{list:function({includeArrayTypes:e=!1,includeSystemSchemas:t=!1,includedSchemas:i,excludedSchemas:s,limit:l,offset:o}={}){let c=eq;e||(c=n.safeSql`${c} and not exists (
      select from pg_type el
      where el.oid = t.typelem
        and el.typarray = t.oid
    )`);let d=r(i,s,t?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return d&&(c=n.safeSql`${c} and n.nspname ${d}`),l&&(c=n.safeSql`${c} limit ${(0,n.literal)(l)}`),o&&(c=n.safeSql`${c} offset ${(0,n.literal)(o)}`),{sql:c,zod:eD}},zod:ew}],211309);let ex=n.safeSql`
select
  version(),
  current_setting('server_version_num')::int8 as version_number,
  (
    select
      count(*) as active_connections
    from
      pg_stat_activity
  ) as active_connections,
  current_setting('max_connections')::int8 as max_connections
`,eF=t.z.object({version:t.z.string(),version_number:t.z.number(),active_connections:t.z.number(),max_connections:t.z.number()});e.s(["default",0,{retrieve:function(){return{sql:ex,zod:eF}},zod:eF}],267655);let ez=n.safeSql`
SELECT
  c.oid :: int8 AS id,
  n.nspname AS schema,
  c.relname AS name,
  (pg_relation_is_updatable(c.oid, false) & 20) = 20 AS is_updatable,
  obj_description(c.oid) AS comment
FROM
  pg_class c
  JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE
  c.relkind = 'v'
`,ej=t.z.object({id:t.z.number(),schema:t.z.string(),name:t.z.string(),is_updatable:t.z.boolean(),comment:t.z.string().nullable(),columns:p.optional()}),eU=t.z.array(ej),ek=t.z.optional(ej),eH=({includeColumns:e})=>n.safeSql`
with views as (${ez})
  ${e?n.safeSql`, columns as (${d})`:n.safeSql``}
select
  *
  ${e?n.safeSql`, ${i("columns",n.safeSql`columns.table_id = views.id`)}`:n.safeSql``}
from views`;e.s(["default",0,{list:function({includeSystemSchemas:e=!1,includedSchemas:t,excludedSchemas:i,limit:s,offset:l,includeColumns:o=!0}={}){let c=eH({includeColumns:o}),d=r(t,i,e?void 0:a.DEFAULT_SYSTEM_SCHEMAS);return d&&(c=n.safeSql`${c} where schema ${d}`),s&&(c=n.safeSql`${c} limit ${(0,n.literal)(s)}`),l&&(c=n.safeSql`${c} offset ${(0,n.literal)(l)}`),{sql:c,zod:eU}},retrieve:function(e){let t=function(e){if("id"in e&&e.id)return n.safeSql`${(0,n.ident)("id")} = ${(0,n.literal)(e.id)}`;if("name"in e&&e.name&&e.schema)return n.safeSql`${(0,n.ident)("name")} = ${(0,n.literal)(e.name)} and ${(0,n.ident)("schema")} = ${(0,n.literal)(e.schema)}`;throw Error("Must provide either id or name and schema")}(e);return{sql:n.safeSql`${eH({includeColumns:!0})} where ${t};`,zod:ek}},zod:ej}],58347)},850036,774105,822797,306255,474534,247309,640696,556955,517638,809403,997780,270655,636787,467394,53336,33942,152770,439137,345942,757489,957386,779262,538892,85205,679295,826112,864748,45160,261126,788035,71859,332108,664304,46166,158161,420732,392286,389273,480762,e=>{"use strict";var t,a=e.i(976876),n=e.i(761087),i=e.i(486603),r=e.i(981263),s=e.i(254873),l=e.i(198687),o=e.i(673351),c=e.i(784883),d=e.i(201049),_=e.i(557928),p=e.i(567205),m=e.i(912920),u=e.i(454430),E=e.i(330006),g=e.i(819615),f=e.i(211309),b=e.i(267655),h=e.i(58347);e.i(967533);var S=e.i(721490),N=e.i(332357),T=e.i(193767),$=e.i(212695),v=e.i(29659);e.s(["Query",()=>S.Query,"QueryAction",()=>$.QueryAction,"QueryFilter",()=>T.QueryFilter,"QueryModifier",()=>v.QueryModifier,"countQuery",()=>N.countQuery,"deleteQuery",()=>N.deleteQuery,"insertQuery",()=>N.insertQuery,"selectQuery",()=>N.selectQuery,"truncateQuery",()=>N.truncateQuery,"updateQuery",()=>N.updateQuery,"wrapWithRollback",()=>N.wrapWithRollback,"wrapWithTransaction",()=>N.wrapWithTransaction],377171);var A=e.i(377171);function I(e,t){let a=e.replace(/'/g,"''"),n=t.replace(/'/g,"''"),i=a.toLowerCase().replace(/[.+*?^${}()|[\]\\]/g,"\\$&"),r=n.toLowerCase().replace(/[.+*?^${}()|[\]\\]/g,"\\$&");return`
-- Get top 5 SELECT queries involving this table and run through index_advisor
set search_path to public, extensions;

with top_queries as (
  select
    statements.query,
    statements.calls,
    statements.total_exec_time + statements.total_plan_time as total_time,
    statements.mean_exec_time + statements.mean_plan_time as mean_time
  from pg_stat_statements as statements
    inner join pg_authid as auth on statements.userid = auth.oid
  where
    -- Filter for SELECT queries only (index_advisor only works with SELECT)
    (lower(statements.query) like 'select%' or lower(statements.query) like 'with pgrst%')
    -- Filter for queries involving our table. Use regex word boundaries so that e.g.
    -- looking for table "orders" does not match queries on "orders_items".
    and (
      lower(statements.query) ~ '(^|[^a-z0-9_$])${i}[.]${r}($|[^a-z0-9_$])'
      or lower(statements.query) ~ '(^|[^a-z0-9_$])from[[:space:]]+${r}($|[^a-z0-9_$])'
      or lower(statements.query) ~ '(^|[^a-z0-9_$])join[[:space:]]+${r}($|[^a-z0-9_$])'
    )
    -- Exclude system queries
    and statements.query not like '%pg_catalog%'
    and statements.query not like '%information_schema%'
  order by statements.calls desc
  limit 5
)
select
  tq.query,
  tq.calls,
  tq.total_time,
  tq.mean_time,
  coalesce(ia.index_statements, '{}') as index_statements,
  coalesce((ia.startup_cost_before)::numeric, 0) as startup_cost_before,
  coalesce((ia.startup_cost_after)::numeric, 0) as startup_cost_after,
  coalesce((ia.total_cost_before)::numeric, 0) as total_cost_before,
  coalesce((ia.total_cost_after)::numeric, 0) as total_cost_after
from top_queries tq
left join lateral (
  select * from index_advisor(tq.query)
) ia on true;
`.trim()}e.s(["getTableIndexAdvisorSql",()=>I],774105);var R=e.i(479084);let L=["idx_users_email","idx_users_created_at_desc","idx_users_last_sign_in_at_desc","idx_users_name","users_phone_key"];function y(e,t){let a="00000000-0000-0000-0000-000000000000".split("").map((t,a)=>"-"===t?t:e[a]??t);if(e.length>=a.length)return a.join("");if(e.length&&e.length<15&&(a[14]="4"),e.length&&e.length<20&&(a[19]=t?"b":"8"),t)for(let t=e.length;t<a.length;t+=1)"0"===a[t]&&(a[t]="f");return a.join("")}function O(e){if(!e)return[e,void 0];let t=e.charCodeAt(e.length-1);if(122===t)return[e,e+"~"];if(t>=126)return[e,e+" "];let a=e.substring(0,e.length-1)+String.fromCharCode(t+1);return[e,a]}e.s(["USER_SEARCH_INDEXES",0,L,"getIndexStatusesSQL",0,()=>`SELECT c.relname as index_name, i.indisvalid as is_valid, i.indisready as is_ready
    FROM pg_index i
    JOIN pg_class c ON c.oid = i.indexrelid
    JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE n.nspname = 'auth'
    AND c.relname IN (${L.map(R.literal).join(", ")});`],822797),e.s(["getIndexWorkerStatusSQL",0,()=>`SELECT EXISTS (
    SELECT 1 FROM pg_locks
    WHERE locktype = 'advisory'
    AND (classid::bigint << 32 | objid::bigint) = hashtext('auth_index_worker')::bigint
  ) as is_in_progress;`],306255),e.s(["getUserSQL",0,e=>`
select
  auth.users.id,
  auth.users.email,
  auth.users.banned_until,
  auth.users.created_at,
  auth.users.confirmed_at,
  auth.users.confirmation_sent_at,
  auth.users.is_anonymous,
  auth.users.is_sso_user,
  auth.users.invited_at,
  auth.users.last_sign_in_at,
  auth.users.phone,
  auth.users.raw_app_meta_data,
  auth.users.raw_user_meta_data,
  auth.users.updated_at,
  coalesce(
    (
      select
        array_agg(distinct i.provider)
      from
        auth.identities i
      where
        i.user_id = users.id
    ),
    '{}'::text[]
  ) as providers
from
  auth.users
where id = '${e}';
`.trim()],474534);let C=`
CREATE OR REPLACE FUNCTION pg_temp.count_estimate(
    query text
) RETURNS integer LANGUAGE plpgsql AS $$
DECLARE
    plan jsonb;
BEGIN
    EXECUTE 'EXPLAIN (FORMAT JSON)' || query INTO plan;
    RETURN plan->0->'Plan'->'Plan Rows';
END;
$$;
`.trim();e.s(["COUNT_ESTIMATE_SQL",0,C,"THRESHOLD_COUNT",0,5e4],247309),e.s(["getUsersCountSQL",0,({filter:e,keywords:t,providers:a,forceExactCount:n=!1,column:i})=>{let r=t&&""!==t,s=[],l="select count(*) from auth.users";if(i&&r){if("email"===i){let e=O(t),a=(0,R.literal)(e[0]),n=e[1]?(0,R.literal)(e[1]):null;s.push(`lower(email) >= ${a}${n?` and lower(email) < ${n}`:""} and instance_id = '00000000-0000-0000-0000-000000000000'::uuid`)}else if("phone"===i){let e=O(t),a=(0,R.literal)(e[0]),n=e[1]?(0,R.literal)(e[1]):null;s.push(`phone >= ${a}${n?` and phone < ${n}`:""}`)}else if("id"===i){let e=y(t,!1);if(e===t)s.push(`id = ${(0,R.literal)(t)}`);else{let a=y(t,!0);s.push(`id >= ${(0,R.literal)(e)} and id < ${(0,R.literal)(a)}`)}}}else{if(r){let e=(0,R.literal)(`%${t}%`);s.push(`id::text ilike ${e} or email ilike ${e} or phone ilike ${e}`)}if("verified"===e?s.push("email_confirmed_at IS NOT NULL or phone_confirmed_at IS NOT NULL"):"anonymous"===e?s.push("is_anonymous is true"):"unverified"===e&&s.push("email_confirmed_at IS NULL AND phone_confirmed_at IS NULL"),a&&a.length>0)if(a.includes("saml 2.0")){let e=a.map(e=>"saml 2.0"===e?"sso":e);s.push(`(select jsonb_agg(case when value ~ '^sso' then 'sso' else value end) from jsonb_array_elements_text((raw_app_meta_data ->> 'providers')::jsonb)) ?| array[${(0,R.literal)(e)}]`.trim())}else s.push(`(raw_app_meta_data->>'providers')::jsonb ?| array[${(0,R.literal)(a)}]`)}let o=s.map(e=>`(${e})`).join(" and "),c=s.length>0?` where ${o}`:"";if(n)return`select (${l}${c}), false as is_estimate;`;{let e=`select * from auth.users${c}`,t=`${l}${c}`,a=(0,R.literal)(e);return`
${C}

with approximation as (select reltuples as estimate from pg_class where oid = 'auth.users'::regclass)
select 
  case 
    when estimate = -1 then (select pg_temp.count_estimate(${a}))::int
    when estimate > 50000 then ${s.length>0?`(select pg_temp.count_estimate(${a}))::int`:"estimate::int"}
    else (${t})
  end as count,
  estimate = -1 or estimate > 50000 as is_estimate
from approximation;
`.trim()}}],640696);let q=50;e.s(["getPaginatedUsersSQL",0,({page:e=0,verified:t,keywords:a,providers:n,sort:i,order:r,limit:s=q,column:l,startAt:o,cursor:c,improvedSearchEnabled:d=!1})=>{if(d)return(({column:e,keywords:t,verified:a,providers:n,sort:i,order:r,cursor:s,limit:l=q})=>{let o=[];if(t&&""!==t){if("email"===e){let e=O(t);e[1]?o.push(`email >= ${(0,R.literal)(e[0])} AND email < ${(0,R.literal)(e[1])}`):o.push(`email >= ${(0,R.literal)(e[0])}`)}else if("phone"===e){let e=O(t);e[1]?o.push(`phone >= ${(0,R.literal)(e[0])} AND phone < ${(0,R.literal)(e[1])}`):o.push(`phone >= ${(0,R.literal)(e[0])}`)}else if("id"===e)o.push(`id = ${(0,R.literal)(t)}`);else if("name"===e){let e=O(t);e[1]?o.push(`raw_user_meta_data->>'name' >= ${(0,R.literal)(e[0])} AND raw_user_meta_data->>'name' < ${(0,R.literal)(e[1])}`):o.push(`raw_user_meta_data->>'name' >= ${(0,R.literal)(e[0])}`)}}"verified"===a?o.push("(email_confirmed_at IS NOT NULL OR phone_confirmed_at IS NOT NULL)"):"anonymous"===a?o.push("is_anonymous IS TRUE"):"unverified"===a&&o.push("(email_confirmed_at IS NULL AND phone_confirmed_at IS NULL)"),n&&n.length>0&&(n.includes("saml 2.0")?o.push(`(SELECT jsonb_agg(CASE WHEN value ~ '^sso' THEN 'sso' ELSE value END) FROM jsonb_array_elements_text((raw_app_meta_data ->> 'providers')::jsonb)) ?| array[${n.map(e=>(0,R.literal)("saml 2.0"===e?"sso":e)).join(", ")}]`):o.push(`(raw_app_meta_data->>'providers')::jsonb ?| array[${n.map(e=>(0,R.literal)(e)).join(", ")}]`));let c=i??"created_at",d=r??"desc";if(s){let e="desc"===d?"<":">";"id"===c?o.push(`id ${e} ${(0,R.literal)(s.id)}::uuid`):o.push(`(${(0,R.ident)(c)}, id) ${e} (${(0,R.literal)(s.sort)}, ${(0,R.literal)(s.id)}::uuid)`)}let _=o.map(e=>`(${e})`).join(" AND "),p=o.length>0?`WHERE ${_}`:"",m="id"===c?`${(0,R.ident)(c)} ${d}`:`${(0,R.ident)(c)} ${d}, id ${d}`,u=`
    SELECT
      auth.users.id,
      auth.users.email,
      auth.users.banned_until,
      auth.users.created_at,
      auth.users.confirmed_at,
      auth.users.confirmation_sent_at,
      auth.users.is_anonymous,
      auth.users.is_sso_user,
      auth.users.invited_at,
      auth.users.last_sign_in_at,
      auth.users.phone,
      auth.users.raw_app_meta_data,
      auth.users.raw_user_meta_data
    FROM
      auth.users
    ${p}
    ORDER BY
      ${m}
    LIMIT
      ${l}`;return`
WITH
  users_data AS (${u})
SELECT
  *,
  COALESCE(
    (
      SELECT
        array_agg(DISTINCT i.provider)
      FROM
        auth.identities i
      WHERE
        i.user_id = users_data.id
    ),
    '{}'::text[]
  ) AS providers
FROM
  users_data;`.trim()})({column:l??"email",keywords:a,verified:t,providers:n,sort:i,order:r,limit:s,cursor:c});let _=e*s,p=[];if(a&&""!==a){let e=`%${a}%`;p.push(`id::text like ${(0,R.literal)(e)} or email like ${(0,R.literal)(e)} or phone like ${(0,R.literal)(e)} or raw_user_meta_data->>'full_name' ilike ${(0,R.literal)(e)} or raw_user_meta_data->>'first_name' ilike ${(0,R.literal)(e)} or raw_user_meta_data->>'last_name' ilike ${(0,R.literal)(e)} or raw_user_meta_data->>'display_name' ilike ${(0,R.literal)(e)}`)}"verified"===t?p.push("email_confirmed_at IS NOT NULL or phone_confirmed_at IS NOT NULL"):"anonymous"===t?p.push("is_anonymous is true"):"unverified"===t&&p.push("email_confirmed_at IS NULL AND phone_confirmed_at IS NULL"),n&&n.length>0&&(n.includes("saml 2.0")?p.push(`(select jsonb_agg(case when value ~ '^sso' then 'sso' else value end) from jsonb_array_elements_text((raw_app_meta_data ->> 'providers')::jsonb)) ?| array[${n.map(e=>(0,R.literal)("saml 2.0"===e?"sso":e)).join(", ")}]`.trim()):p.push(`(raw_app_meta_data->>'providers')::jsonb ?| array[${n.map(e=>(0,R.literal)(e)).join(", ")}]`));let m=p.map(e=>`(${e})`).join(" and "),u=r??"desc",E=`${p.length>0?` where ${m}`:""}
    order by
      ${(0,R.ident)(i??"created_at")} ${u} nulls last
    limit
      ${s}
    offset
      ${_}
  `,g=o?">":">=";if("email"===l){let e=O(a??"");E=`where lower(email) ${g} ${(0,R.literal)(o||e[0])} ${e[1]?`and lower(email) < ${(0,R.literal)(e[1])}`:""} and instance_id = '00000000-0000-0000-0000-000000000000'::uuid order by instance_id, lower(email) asc limit ${s}`}else if("phone"===l){let e=O(a??"");E=`where phone ${g} ${(0,R.literal)(o||e[0])} ${e[1]?`and phone < ${(0,R.literal)(e[1])}`:""} order by phone asc limit ${s}`}else"id"===l&&(E=y(a??"",!1)===a?`where id = ${(0,R.literal)(a)} order by id asc limit ${s}`:`where id ${g} ${(0,R.literal)(o||y(a??"",!1))} and id < ${(0,R.literal)(y(a??"",!0))} order by id asc limit ${s}`);let f=`
    select
      auth.users.id,
      auth.users.email,
      auth.users.banned_until,
      auth.users.created_at,
      auth.users.confirmed_at,
      auth.users.confirmation_sent_at,
      auth.users.is_anonymous,
      auth.users.is_sso_user,
      auth.users.invited_at,
      auth.users.last_sign_in_at,
      auth.users.phone,
      auth.users.raw_app_meta_data,
      auth.users.raw_user_meta_data,
      auth.users.updated_at
    from
      auth.users
    ${E}`;return`
with
  users_data as (${f})
select
  *,
  coalesce(
    (
      select
        array_agg(distinct i.provider)
      from
        auth.identities i
      where
        i.user_id = users_data.id
    ),
    '{}'::text[]
  ) as providers
from
  users_data;
  `.trim()}],556955);let w=`
SELECT id, name, file_size_limit
FROM storage.buckets
WHERE file_size_limit IS NOT NULL
ORDER BY file_size_limit DESC
LIMIT 51;
`.trim();function D({wrapperMeta:e,formState:t,mode:a,tables:n,sourceSchema:i,targetSchema:r,schemaOptions:s=[]}){let l=n.filter(e=>e.is_new_schema).map(e=>`create schema if not exists ${e.schema_name};`).join("\n"),o=`
    create foreign data wrapper "${t.wrapper_name}"
    handler "${e.handlerName}"
    validator "${e.validatorName}";
  `,c=e.server.options.filter(e=>e.encrypted),d=e.server.options.filter(e=>!e.encrypted),_=c.map(e=>{let a=`${t.wrapper_name}_${e.name}`,n=(t[e.name]||"").replace(/'/g,"''");return`
      do $$
      begin
        -- Old wrappers has an implicit dependency on pgsodium. For new wrappers
        -- we use Vault directly.
        if (select extversion from pg_extension where extname = 'wrappers') in (
          '0.1.0',
          '0.1.1',
          '0.1.4',
          '0.1.5',
          '0.1.6',
          '0.1.7',
          '0.1.8',
          '0.1.9',
          '0.1.10',
          '0.1.11',
          '0.1.12',
          '0.1.14',
          '0.1.15',
          '0.1.16',
          '0.1.17',
          '0.1.18',
          '0.1.19',
          '0.2.0',
          '0.3.0',
          '0.3.1',
          '0.4.0',
          '0.4.1',
          '0.4.2',
          '0.4.3',
          '0.4.4',
          '0.4.5'
        ) then
          create extension if not exists pgsodium;

          perform pgsodium.create_key(
            name := '${a}'
          );

          perform vault.create_secret(
            new_secret := '${n}',
            new_name   := '${a}',
            new_key_id := (select id from pgsodium.valid_key where name = '${a}')
          );
        else
          perform vault.create_secret(
            new_secret := '${n}',
            new_name := '${a}'
          );
        end if;
      end $$;
    `}).join("\n"),p=[...c.filter(e=>t[e.name]).map(e=>`${e.name} ''%s''`),...d.filter(e=>t[e.name]).map(e=>`"${e.name}" ''${t[e.name].replace(/'/g,"''''")}''`)].join(","),m=`
    do $$
    declare
      -- Old wrappers has an implicit dependency on pgsodium. For new wrappers
      -- we use Vault directly.
      is_using_old_wrappers bool;
      ${c.map(e=>`v_${e.name} text;`).join("\n")}
    begin
      is_using_old_wrappers := (select extversion from pg_extension where extname = 'wrappers') in (
        '0.1.0',
        '0.1.1',
        '0.1.4',
        '0.1.5',
        '0.1.6',
        '0.1.7',
        '0.1.8',
        '0.1.9',
        '0.1.10',
        '0.1.11',
        '0.1.12',
        '0.1.14',
        '0.1.15',
        '0.1.16',
        '0.1.17',
        '0.1.18',
        '0.1.19',
        '0.2.0',
        '0.3.0',
        '0.3.1',
        '0.4.0',
        '0.4.1',
        '0.4.2',
        '0.4.3',
        '0.4.4',
        '0.4.5'
      );
      ${c.map(e=>`
              if is_using_old_wrappers then
                select id into v_${e.name} from pgsodium.valid_key where name = '${t.wrapper_name}_${e.name}' limit 1;
              else
                select id into v_${e.name} from vault.secrets where name = '${t.wrapper_name}_${e.name}' limit 1;
              end if;
            `).join("\n")}
    
      execute format(
        E'create server "${t.server_name}" foreign data wrapper "${t.wrapper_name}" options (${p});',
        ${c.filter(e=>t[e.name]).map(e=>`v_${e.name}`).join(",\n")}
      );
    end $$;
  `,u=n.map(e=>{let a=e.columns;return`
        create foreign table "${e.schema_name}"."${e.table_name}" (
          ${a.map(e=>`"${e.name}" ${e.type}`).join(",\n          ")}
        )
        server ${t.server_name}
        options (
          ${Object.entries(e).filter(([e,t])=>"table_name"!==e&&"schema_name"!==e&&"columns"!==e&&"index"!==e&&"is_new_schema"!==e&&!!t).map(([e,t])=>`${e} '${t}'`).join(",\n          ")}
        );
      `}).join("\n\n"),E=[...s,"strict 'true'"].join(", "),g=`
  import foreign schema "${i}" from server ${t.server_name} into ${r} options (${E});
`;return`
    ${l}

    ${o}

    ${_}

    ${m}

    ${"tables"===a?u:""}

    ${"schema"===a?g:""}
  `}e.s(["LARGEST_SIZE_LIMIT_BUCKETS_COUNT",0,50,"getLargestSizeLimitBucketsSqlUnoptimized",0,w],517638),e.s(["getDeleteBucketPrefixSQL",0,({bucketId:e,prefix:t})=>`
select storage.delete_prefix('${e}', '${t}');
`.trim()],809403),e.s(["getTablesWithAnonAuthenticatedAccessSQL",0,({schema:e})=>`
SELECT c.relname AS table_name
FROM pg_catalog.pg_class AS c
JOIN pg_catalog.pg_namespace AS n ON n.oid = c.relnamespace
WHERE n.nspname = '${e}'
  AND c.relkind IN ('r','p')  -- table, partitioned table
  AND EXISTS (
    SELECT 1
    FROM pg_catalog.aclexplode(COALESCE(c.relacl, '{}'::aclitem[])) AS a
    JOIN pg_catalog.pg_roles r ON r.oid = a.grantee
    WHERE r.rolname IN ('anon','authenticated')
  )
;
`.trim()],997780),e.s(["getUnsafeEntitiesInApiSql",0,({schemas:e})=>{let t=e.map(R.literal).join(", ");return`
    select
      n.nspname as schema,
      c.relname as name,
      case c.relkind
        when 'r' then 'table'
        when 'f' then 'foreign table'
        when 'm' then 'materialized view'
        when 'v' then 'view'
      end as type
    from
      pg_catalog.pg_class c
      join pg_catalog.pg_namespace n on c.relnamespace = n.oid
      left join pg_catalog.pg_depend dep
        on c.oid = dep.objid
        and dep.deptype = 'e'
    where
      (
        pg_catalog.has_table_privilege('anon', c.oid, 'SELECT')
        or pg_catalog.has_table_privilege('authenticated', c.oid, 'SELECT')
      )
      and n.nspname in (${t})
      and n.nspname not in (
        '_timescaledb_cache', '_timescaledb_catalog', '_timescaledb_config',
        '_timescaledb_internal', 'auth', 'cron', 'extensions', 'graphql',
        'graphql_public', 'information_schema', 'net', 'pgmq', 'pgroonga',
        'pgsodium', 'pgsodium_masks', 'pgtle', 'pgbouncer', 'pg_catalog',
        'realtime', 'repack', 'storage', 'supabase_functions',
        'supabase_migrations', 'tiger', 'topology', 'vault'
      )
      and dep.objid is null
      and (
        -- Tables without RLS
        (c.relkind = 'r' and not c.relrowsecurity)
        -- Foreign tables (RLS not supported)
        or c.relkind = 'f'
        -- Materialized views (RLS not supported)
        or c.relkind = 'm'
        -- Views without security invoker (PG 15+)
        or (
          c.relkind = 'v'
          and substring(pg_catalog.version() from 'PostgreSQL ([0-9]+)') >= '15'
          and not (
            lower(coalesce(c.reloptions::text, '{}'))::text[]
            && array[
              'security_invoker=1',
              'security_invoker=true',
              'security_invoker=yes',
              'security_invoker=on'
            ]
          )
        )
      )
    order by n.nspname, c.relname
  `}],270655),e.s(["getTableColumnsSql",0,({table:e,schema:t})=>{let a=[];e&&a.push(`tablename = '${e}'`),t&&a.push(`schemaname = '${t}'`);let n=a.length>0?`WHERE ${a.join(" AND ")}`:"";return`
  
  SELECT
    tbl.schemaname,
    tbl.tablename,
    tbl.quoted_name,
    tbl.is_table,
    json_agg(a) as columns
  FROM
    (
      SELECT
        n.nspname as schemaname,
        c.relname as tablename,
        (quote_ident(n.nspname) || '.' || quote_ident(c.relname)) as quoted_name,
        true as is_table
      FROM
        pg_catalog.pg_class c
        JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
      WHERE
        c.relkind = 'r'
        AND n.nspname not in ('information_schema', 'pg_catalog', 'pg_toast')
        AND n.nspname not like 'pg_temp_%'
        AND n.nspname not like 'pg_toast_temp_%'
        AND has_schema_privilege(n.oid, 'USAGE') = true
        AND has_table_privilege(quote_ident(n.nspname) || '.' || quote_ident(c.relname), 'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER') = true
      union all
      SELECT
        n.nspname as schemaname,
        c.relname as tablename,
        (quote_ident(n.nspname) || '.' || quote_ident(c.relname)) as quoted_name,
        false as is_table
      FROM
        pg_catalog.pg_class c
        JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
      WHERE
        c.relkind in ('v', 'm')
        AND n.nspname not in ('information_schema', 'pg_catalog', 'pg_toast')
        AND n.nspname not like 'pg_temp_%'
        AND n.nspname not like 'pg_toast_temp_%'
        AND has_schema_privilege(n.oid, 'USAGE') = true
        AND has_table_privilege(quote_ident(n.nspname) || '.' || quote_ident(c.relname), 'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER') = true
    ) as tbl
    LEFT JOIN (
      SELECT
        attrelid,
        attname,
        format_type(atttypid, atttypmod) as data_type,
        attnum,
        attisdropped
      FROM
        pg_attribute
    ) as a ON (
      a.attrelid = tbl.quoted_name::regclass
      AND a.attnum > 0
      AND NOT a.attisdropped
      AND has_column_privilege(tbl.quoted_name, a.attname, 'SELECT, INSERT, UPDATE, REFERENCES')
    )
  ${n}
  GROUP BY schemaname, tablename, quoted_name, is_table;
`.trim()}],636787),e.s(["getCronJobsMinimalSql",0,({searchTerm:e,page:t,limit:a})=>`
SELECT 
  job.jobid,
  job.jobname,
  job.schedule,
  job.command,
  job.active
FROM 
  cron.job job
${e?`WHERE job.jobname ILIKE ${(0,R.literal)(`%${e}%`)}`:""}
ORDER BY job.jobid
LIMIT ${a}
OFFSET ${t*a};
`.trim(),"getCronJobsSql",0,({searchTerm:e,page:t,limit:a})=>`
WITH latest_runs AS (
  SELECT 
    jobid,
    status,
    MAX(start_time) AS latest_run
  FROM cron.job_run_details
  GROUP BY jobid, status
), most_recent_runs AS (
  SELECT 
    jobid, 
    status, 
    latest_run
  FROM latest_runs lr1
  WHERE latest_run = (
    SELECT MAX(latest_run) 
    FROM latest_runs lr2 
    WHERE lr2.jobid = lr1.jobid
  )
)
SELECT 
  job.jobid,
  job.jobname,
  job.schedule,
  job.command,
  job.active,
  mr.latest_run,
  mr.status
FROM 
  cron.job job
LEFT JOIN most_recent_runs mr ON job.jobid = mr.jobid
${e?`WHERE job.jobname ILIKE ${(0,R.literal)(`%${e}%`)}`:""}
ORDER BY job.jobid
LIMIT ${a}
OFFSET ${t*a};
`.trim(),"getDeleteOldCronJobRunDetailsByCtidSql",0,(e,t,a)=>{let n=(0,R.literal)(`(${t},0)`),i=(0,R.literal)(`(${a},0)`);return`
WITH deleted AS (
  DELETE FROM cron.job_run_details
  WHERE ctid >= ${n}::tid
    AND ctid < ${i}::tid
    AND end_time < now() - interval ${(0,R.literal)(e)}
  RETURNING 1
)
SELECT count(*) as deleted_count FROM deleted;
`.trim()},"getJobRunDetailsPageCountSql",0,()=>`
SELECT pg_relation_size(oid) / current_setting('block_size')::int8 AS num_pages
FROM pg_class
WHERE relname = 'job_run_details'
  AND relnamespace = 'cron'::regnamespace;
`.trim(),"getScheduleDeleteCronJobRunDetailsSql",0,e=>`
SELECT cron.schedule(
  ${(0,R.literal)("delete-job-run-details")},
  ${(0,R.literal)("0 12 * * *")},
  $$DELETE FROM cron.job_run_details WHERE end_time < now() - interval ${(0,R.literal)(e)}$$
);
`.trim()],467394),e.s(["getDatabaseExtensionsSQL",0,()=>`
SELECT
  e.name,
  n.nspname AS schema,
  e.default_version,
  x.extversion AS installed_version,
  e.comment,
  ev.schema AS default_version_schema
FROM
  pg_available_extensions e
  LEFT JOIN pg_extension x ON e.name = x.extname
  LEFT JOIN pg_namespace n ON x.extnamespace = n.oid
  LEFT JOIN pg_available_extension_versions ev
    ON ev.name = e.name AND ev.version = e.default_version;
`.trim(),"getEnableDatabaseExtensionSQL",0,({schema:e,name:t,version:a,cascade:n,createSchema:i=!1})=>{let{sql:s}=r.default.create({schema:e,name:t,version:a,cascade:n});return i?`
CREATE SCHEMA IF NOT EXISTS ${(0,R.ident)(e)};
${s}
`.trim():s.trim()}],53336);let x=({wrapper:e,wrapperMeta:t})=>{let a=t.server.options.filter(e=>e.encrypted).map(t=>{let a=`${e.name}_${t.name}`;return`
      do $$
      begin
        -- Old wrappers has an implicit dependency on pgsodium. For new wrappers
        -- we use Vault directly.
        if (select extversion from pg_extension where extname = 'wrappers') in (
          '0.1.0',
          '0.1.1',
          '0.1.4',
          '0.1.5',
          '0.1.6',
          '0.1.7',
          '0.1.8',
          '0.1.9',
          '0.1.10',
          '0.1.11',
          '0.1.12',
          '0.1.14',
          '0.1.15',
          '0.1.16',
          '0.1.17',
          '0.1.18',
          '0.1.19',
          '0.2.0',
          '0.3.0',
          '0.3.1',
          '0.4.0',
          '0.4.1',
          '0.4.2',
          '0.4.3',
          '0.4.4',
          '0.4.5'
        ) then
          delete from vault.secrets where key_id = (select id from pgsodium.valid_key where name = '${a}');

          delete from pgsodium.key where name = '${a}';
        else
          delete from vault.secrets where name = '${a}';
        end if;
      end $$;
    `}).join("\n");return`
    drop foreign data wrapper if exists "${e.name}" cascade;

    ${a}
  `};function F({serverName:e,sourceSchema:t,targetSchema:a,schemaOptions:n=[]}){let i=[...n,"strict 'true'"].join(", ");return`
  import foreign schema "${t}" from server ${e} into ${a} options (${i});
`}function z({schema:e,table:t}){return`
drop foreign table if exists "${e}"."${t}";
`}function j({search:e,ignoredSchemas:t=[]}={}){let a=t.map(e=>`'${e}'`).join(", ");return`
    table_privileges as (
      select
        c.oid::int as id,
        n.nspname as schema_name,
        c.relname as name,
        c.relkind as kind,

        -- Anon Privileges
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'SELECT') as anon_select,
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'INSERT') as anon_insert,
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'UPDATE') as anon_update,
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'DELETE') as anon_delete,

        -- Authenticated Privileges
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'SELECT') as auth_select,
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'INSERT') as auth_insert,
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'UPDATE') as auth_update,
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'DELETE') as auth_delete,

        -- Service Role Privileges
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'SELECT') as srv_select,
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'INSERT') as srv_insert,
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'UPDATE') as srv_update,
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'DELETE') as srv_delete

      from pg_class c
      join pg_namespace n
        on n.oid = c.relnamespace
      left join lateral aclexplode(coalesce(c.relacl, acldefault('r', c.relowner))) as acl
        on true
      left join pg_roles pr
        on pr.oid = acl.grantee
      where c.relkind in ('r', 'p', 'v', 'm', 'f')
        ${a?`and n.nspname not in (${a})`:""}
        ${e?`and (n.nspname || '.' || c.relname) ilike '%${e}%'`:""}
      group by c.oid, n.nspname, c.relname, c.relkind
    ),
    table_grants as (
      select
        id,
        schema_name,
        name,
        kind,
        case
          -- 1. Strict Granted: All 3 roles possess ALL 4 privileges
          when (
            anon_select and anon_insert and anon_update and anon_delete and
            auth_select and auth_insert and auth_update and auth_delete and
            srv_select and srv_insert and srv_update and srv_delete
          ) then 'granted'

          -- 2. Strict Revoked: NO role possesses ANY privilege
          when not (
            anon_select or anon_insert or anon_update or anon_delete or
            auth_select or auth_insert or auth_update or auth_delete or
            srv_select or srv_insert or srv_update or srv_delete
          ) then 'revoked'

          -- 3. Custom: Anything in between
          else 'custom'
        end as status
      from table_privileges
    )
  `}function U({search:e,offset:t,limit:a,ignoredSchemas:n=[]}){return`
    with ${j({search:e,ignoredSchemas:n})}
    select
      (select count(*)::int from table_grants) as total_count,
      coalesce(
        (
          select jsonb_agg(
            jsonb_build_object(
              'id', tg.id,
              'schema', tg.schema_name,
              'name', tg.name,
              'status', tg.status
            )
          )
          from (
            select *
            from table_grants
            order by schema_name, name
            offset ${t}
            limit ${a}
          ) tg
        ),
        '[]'::jsonb
      ) as tables;
  `}function k({selectedSchemas:e,ignoredSchemas:t=[]}){let a=e.length>0?e.map(e=>`'${e}'`).join(", "):"''";return`
    with ${j({ignoredSchemas:t})}
    select
      count(*)::int as total_count,
      (count(*) filter (where status = 'granted' and schema_name in (${a})))::int as grants_count
    from table_grants
  `}function H({search:e,ignoredSchemas:t=[]}={}){let a=t.map(e=>`'${e}'`).join(", ");return`
    function_privileges as (
      select
        n.nspname as schema_name,
        p.proname as name,

        -- Aggregate EXECUTE across all overloads + all 3 roles
        bool_or(pr.rolname = 'anon' and acl.privilege_type = 'EXECUTE') as anon_execute,
        bool_or(pr.rolname = 'authenticated' and acl.privilege_type = 'EXECUTE') as auth_execute,
        bool_or(pr.rolname = 'service_role' and acl.privilege_type = 'EXECUTE') as srv_execute

      from pg_proc p
      join pg_namespace n
        on n.oid = p.pronamespace
      left join lateral aclexplode(coalesce(p.proacl, acldefault('f', p.proowner))) as acl
        on true
      left join pg_roles pr
        on pr.oid = acl.grantee
      where p.prokind in ('f', 'w')
        ${a?`and n.nspname not in (${a})`:""}
        ${e?`and (n.nspname || '.' || p.proname) ilike '%${e}%'`:""}
      group by n.nspname, p.proname
    ),
    function_grants as (
      select
        schema_name,
        name,
        case
          when anon_execute and auth_execute and srv_execute then 'granted'
          when not (anon_execute or auth_execute or srv_execute) then 'revoked'
          else 'custom'
        end as status
      from function_privileges
    )
  `}function M({search:e,offset:t,limit:a,ignoredSchemas:n=[]}){return`
    with ${H({search:e,ignoredSchemas:n})}
    select
      (select count(*)::int from function_grants) as total_count,
      coalesce(
        (
          select jsonb_agg(
            jsonb_build_object(
              'schema', fg.schema_name,
              'name', fg.name,
              'status', fg.status
            )
          )
          from (
            select *
            from function_grants
            order by schema_name, name
            offset ${t}
            limit ${a}
          ) fg
        ),
        '[]'::jsonb
      ) as functions;
  `}function G({selectedSchemas:e,ignoredSchemas:t=[]}){let a=e.length>0?e.map(e=>`'${e}'`).join(", "):"''";return`
    with ${H({ignoredSchemas:t})}
    select
      count(*)::int as total_count,
      (count(*) filter (where status = 'granted' and schema_name in (${a})))::int as grants_count
    from function_grants
  `}function P({schema:e="public"}={}){return`
    select
      count(*)::int as grant_count
    from pg_default_acl d
    join pg_namespace n on n.oid = d.defaclnamespace
    join pg_roles r on r.oid = d.defaclrole
    where n.nspname = '${e}'
      and r.rolname = 'postgres'
      and d.defaclobjtype in ('r', 'f', 'S')
      and exists (
        select 1
        from aclexplode(d.defaclacl) acl
        join pg_roles gr on gr.oid = acl.grantee
        where gr.rolname in ('anon', 'authenticated', 'service_role')
      )
  `}function W(e){let t=[];for(let a of["anon","authenticated","service_role"])"grant"===e?t.push(`alter default privileges for role postgres in schema public grant select, insert, update, delete on tables to ${a}`,`alter default privileges for role postgres in schema public grant execute on functions to ${a}`,`alter default privileges for role postgres in schema public grant usage, select on sequences to ${a}`):t.push(`alter default privileges for role postgres in schema public revoke select, insert, update, delete on tables from ${a}`,`alter default privileges for role postgres in schema public revoke execute on functions from ${a}`,`alter default privileges for role postgres in schema public revoke usage, select on sequences from ${a}`);return"revoke"===e?t.push("alter default privileges for role postgres in schema public revoke execute on functions from public"):t.push("alter default privileges for role postgres in schema public grant execute on functions to public"),t.join(";\n")+";"}e.s(["getCreateFDWSql",()=>D,"getDeleteFDWSql",0,x,"getDropForeignTableSql",()=>z,"getFDWsSql",0,()=>`
    select
      s.oid as "id",
      w.fdwname as "name",
      s.srvname as "server_name",
      s.srvoptions as "server_options",
      c.proname as "handler",
      (
        select jsonb_agg(
          jsonb_build_object(
            'id', c.oid::bigint,
            'schema', relnamespace::regnamespace::text,
            'name', c.relname,
            'columns', (
              select jsonb_agg(
                jsonb_build_object(
                  'name', a.attname,
                  'type', pg_catalog.format_type(a.atttypid, a.atttypmod)
                )
              )
              from pg_catalog.pg_attribute a
              where a.attrelid = c.oid and a.attnum > 0 and not a.attisdropped
            ),
            'options', t.ftoptions
          )
        )
        from pg_catalog.pg_class c
        join pg_catalog.pg_foreign_table t on c.oid = t.ftrelid
        where c.oid = any (select t.ftrelid from pg_catalog.pg_foreign_table t where t.ftserver = s.oid)
      ) as "tables"
    from pg_catalog.pg_foreign_server s
    join pg_catalog.pg_foreign_data_wrapper w on s.srvfdw = w.oid
    join pg_catalog.pg_proc c on w.fdwhandler = c.oid;
  `,"getImportForeignSchemaSql",()=>F,"getUpdateFDWSql",0,({wrapper:e,wrapperMeta:t,formState:a,tables:n})=>{let i=x({wrapper:e,wrapperMeta:t}),r=D({wrapperMeta:t,formState:a,tables:n,mode:"tables",sourceSchema:"",targetSchema:""});return`
    ${i}

    ${r}
  `}],33942),e.s(["getIndexesSQL",0,({schema:e})=>`
SELECT
  n.nspname        AS schema,
  t.relname        AS "table",
  i.relname        AS name,
  pg_get_indexdef(idx.indexrelid) AS definition,
  STRING_AGG(
    COALESCE(a.attname, '(expression)'),
    ', ' ORDER BY k.ord
  ) AS columns
FROM pg_index idx
JOIN pg_class      t ON t.oid = idx.indrelid
JOIN pg_class      i ON i.oid = idx.indexrelid
JOIN pg_namespace  n ON n.oid = t.relnamespace
JOIN LATERAL unnest(idx.indkey) WITH ORDINALITY AS k(attnum, ord) ON TRUE
LEFT JOIN pg_attribute a
  ON a.attrelid = t.oid
 AND a.attnum   = k.attnum
WHERE n.nspname = '${e}'
GROUP BY
  n.nspname,
  t.relname,
  i.relname,
  idx.indexrelid
ORDER BY
  schema, "table", name;
`.trim()],152770),e.s(["getCreateMigrationsTableSQL",0,()=>`
    create schema if not exists supabase_migrations;
    create table if not exists supabase_migrations.schema_migrations (
      version text not null primary key,
      statements text[],
      name text
    );
  `.trim(),"getInsertMigrationSQL",0,({name:e,version:t,statements:a})=>`
    insert into supabase_migrations.schema_migrations (version, statements, name)
    select '${t}', array_agg(jsonb_statements)::text[], '${e}'
    from jsonb_array_elements_text($statements$${a}$statements$::jsonb) as jsonb_statements;
  `,"getMigrationsSql",0,()=>`
    select
      *
    from supabase_migrations.schema_migrations sm
    order by sm.version desc
  `.trim()],439137),e.s(["getDatabaseSizeSql",0,()=>`
select sum(pg_database_size(pg_database.datname))::bigint as db_size from pg_database;
`.trim(),"getLiveTupleEstimate",0,(e,t="public")=>`
SELECT n_live_tup AS live_tuple_estimate
FROM pg_stat_user_tables
WHERE schemaname = ${(0,R.literal)(t)}
AND relname = ${(0,R.literal)(e)};
`.trim(),"getMaxConnectionsSql",0,()=>"show max_connections","replicationLagSql",0,()=>`
select 
  case
    when (select count(*) from pg_stat_wal_receiver) = 1 and pg_last_wal_receive_lsn() = pg_last_wal_replay_lsn()
    then 0
    else coalesce(extract(epoch from now() - pg_last_xact_replay_timestamp()),0)
  end as physical_replica_lag_second
  `],345942),e.s(["buildDefaultPrivilegesSql",()=>W,"buildFunctionPrivilegesSql",0,(e,t)=>{if(0===e.length)return"";let a=e.map(e=>{let t=e.indexOf("."),a=e.slice(0,t),n=e.slice(t+1);return`('${a}','${n}')`}).join(", ");return`
    do $$
    declare
      nspname name;
      proname name;
      arg_types text;
    begin
      for nspname, proname, arg_types in
        select n.nspname, p.proname, pg_get_function_identity_arguments(p.oid)
        from pg_proc p
        join pg_namespace n on n.oid = p.pronamespace
        where (n.nspname, p.proname) in (${a})
      loop
        execute format('${"grant"===t?"grant execute on function %I.%I(%s) to anon, authenticated, service_role":"revoke all on function %I.%I(%s) from anon, authenticated, service_role"}', nspname, proname, arg_types);
      end loop;
    end $$;
  `},"buildTablePrivilegesSql",0,(e,t)=>0===e.length?"":`
    do $$
    declare
      nspname name;
      relname name;
    begin
      for nspname, relname in
        select n.nspname, c.relname
        from pg_class c
        join pg_namespace n on n.oid = c.relnamespace
        where c.oid in (${e.join(", ")})
      loop
        execute format('${"grant"===t?"grant select, insert, update, delete on table %I.%I to anon, authenticated, service_role":"revoke all on table %I.%I from anon, authenticated, service_role"}', nspname, relname);
      end loop;
    end $$;
  `,"getDefaultPrivilegesStateSql",()=>P,"getExposedFunctionCountsSql",()=>G,"getExposedFunctionsSql",()=>M,"getExposedTableCountsSql",()=>k,"getExposedTablesSql",()=>U],757489);let B="pgmq_public",Y=`
  drop function if exists 
    ${B}.pop(queue_name text),
    ${B}.send(queue_name text, message jsonb, sleep_seconds integer),
    ${B}.send_batch(queue_name text, message jsonb[], sleep_seconds integer),
    ${B}.archive(queue_name text, message_id bigint),
    ${B}.delete(queue_name text, message_id bigint),
    ${B}.read(queue_name text, sleep integer, n integer)
  ;

  -- Revoke execute permissions on inner pgmq functions to roles (inverse of enabling)
  do $$
  begin
      if exists (select 1 from pg_namespace where nspname = 'pgmq') then
          -- Revoke privileges on the schema itself
          revoke all on schema pgmq from anon, authenticated, service_role;
          
          -- Revoke default privileges for future objects
          alter default privileges in schema pgmq revoke all on tables from anon, authenticated, service_role;
          alter default privileges in schema pgmq revoke all on sequences from anon, authenticated, service_role;
          alter default privileges in schema pgmq revoke all on functions from anon, authenticated, service_role;
      end if;
  end $$;

  drop schema if exists ${B};
`;e.s(["HIDE_QUEUES_FROM_POSTGREST_SQL",0,Y,"QUEUES_SCHEMA",0,B,"getExposeQueuesSQL",0,({isNewerPgmqversion:e})=>`
  create schema if not exists ${B};
  grant usage on schema ${B} to postgres, anon, authenticated, service_role;

  create or replace function ${B}.pop(
      queue_name text
  )
    returns setof pgmq.message_record
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.pop(
          queue_name := queue_name
      );
  end;
  $$;

  comment on function ${B}.pop(queue_name text) is 'Retrieves and locks the next message from the specified queue.';


  create or replace function ${B}.send(
      queue_name text,
      message jsonb,
      sleep_seconds integer default 0  -- renamed from 'delay'
  )
    returns setof bigint
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.send(
          queue_name := queue_name,
          msg := message,
          delay := sleep_seconds
      );
  end;
  $$;

  comment on function ${B}.send(queue_name text, message jsonb, sleep_seconds integer) is 'Sends a message to the specified queue, optionally delaying its availability by a number of seconds.';


  create or replace function ${B}.send_batch(
      queue_name text,
      messages jsonb[],
      sleep_seconds integer default 0  -- renamed from 'delay'
  )
    returns setof bigint
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.send_batch(
          queue_name := queue_name,
          msgs := messages,
          delay := sleep_seconds
      );
  end;
  $$;

  comment on function ${B}.send_batch(queue_name text, messages jsonb[], sleep_seconds integer) is 'Sends a batch of messages to the specified queue, optionally delaying their availability by a number of seconds.';


  create or replace function ${B}.archive(
      queue_name text,
      message_id bigint
  )
    returns boolean
    language plpgsql
    set search_path = ''
  as $$
  begin
      return
      pgmq.archive(
          queue_name := queue_name,
          msg_id := message_id
      );
  end;
  $$;

  comment on function ${B}.archive(queue_name text, message_id bigint) is 'Archives a message by moving it from the queue to a permanent archive.';


  create or replace function ${B}.delete(
      queue_name text,
      message_id bigint
  )
    returns boolean
    language plpgsql
    set search_path = ''
  as $$
  begin
      return
      pgmq.delete(
          queue_name := queue_name,
          msg_id := message_id
      );
  end;
  $$;

  comment on function ${B}.delete(queue_name text, message_id bigint) is 'Permanently deletes a message from the specified queue.';

  create or replace function ${B}.read(
      queue_name text,
      sleep_seconds integer,
      n integer
  )
    returns setof pgmq.message_record
    language plpgsql
    set search_path = ''
  as $$
  begin
      return query
      select *
      from pgmq.read(
          queue_name := queue_name,
          vt := sleep_seconds,
          qty := n ${e?", conditional := '{}'::jsonb":""}
      );
  end;
  $$;

  comment on function ${B}.read(queue_name text, sleep_seconds integer, n integer) is 'Reads up to "n" messages from the specified queue with an optional "sleep_seconds" (visibility timeout).';

  -- Grant execute permissions on wrapper functions to roles
  grant execute on function ${B}.pop(text) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.pop(text) to postgres, service_role, anon, authenticated;

  grant execute on function ${B}.send(text, jsonb, integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.send(text, jsonb, integer) to postgres, service_role, anon, authenticated;

  grant execute on function ${B}.send_batch(text, jsonb[], integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.send_batch(text, jsonb[], integer) to postgres, service_role, anon, authenticated;

  grant execute on function ${B}.archive(text, bigint) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.archive(text, bigint) to postgres, service_role, anon, authenticated;

  grant execute on function ${B}.delete(text, bigint) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.delete(text, bigint) to postgres, service_role, anon, authenticated;

  grant execute on function ${B}.read(text, integer, integer) to postgres, service_role, anon, authenticated;
  grant execute on function pgmq.read(text, integer, integer ${e?", jsonb":""}) to postgres, service_role, anon, authenticated;

  -- For the service role, we want full access
  -- Grant permissions on existing tables
  grant all privileges on all tables in schema pgmq to postgres, service_role;

  -- Ensure service_role has permissions on future tables
  alter default privileges in schema pgmq grant all privileges on tables to postgres, service_role;

  grant usage on schema pgmq to postgres, anon, authenticated, service_role;


  /*
    Grant access to sequences to API roles by default. Existing table permissions
    continue to enforce insert restrictions. This is necessary to accommodate the
    on-backup hook that rebuild queue table primary keys to avoid a pg_dump segfault.
    This can be removed once logical backups are completely retired.
  */
  grant usage, select, update
  on all sequences in schema pgmq
  to anon, authenticated, service_role;

  alter default privileges in schema pgmq
  grant usage, select, update
  on sequences
  to anon, authenticated, service_role;
`.trim(),"getQueuesExposePostgrestStatusSQL",0,()=>`
    SELECT exists (select schema_name FROM information_schema.schemata WHERE schema_name = '${B}');
  `.trim()],957386),e.s(["getTableRowsCountSql",0,({table:e,filters:t=[],enforceExactCount:a=!1,isUsingReadReplica:n=!1})=>{if(!e)return"";if(a){let a=new S.Query().from(e.name,e.schema??void 0).count();return t.filter(e=>e.value&&""!==e.value).forEach(e=>{a=a.filter(e.column,e.operator,e.value)}),`select (${a.toSql().slice(0,-1)}), false as is_estimate;`}{let a=new S.Query().from(e.name,e.schema??void 0).select("*");t.filter(e=>e.value&&""!=e.value).forEach(e=>{a=a.filter(e.column,e.operator,e.value)});let i=a.toSql(),r=new S.Query().from(e.name,e.schema??void 0).count();t.filter(e=>e.value&&""!=e.value).forEach(e=>{r=r.filter(e.column,e.operator,e.value)});let s=r.toSql().slice(0,-1);return n?`
with approximation as (
    select reltuples as estimate
    from pg_class
    where oid = ${e.id}
)
select 
  case 
    when estimate > 50000 then (select -1)
    else (${s})
  end as count,
  estimate > 50000 as is_estimate
from approximation;
`.trim():`
${C}

with approximation as (
    select reltuples as estimate
    from pg_class
    where oid = ${e.id}
)
select 
  case 
    when estimate > 50000 then ${t.length>0?`pg_temp.count_estimate('${i.replaceAll("'","''")}')`:"estimate"}
    else (${s})
  end as count,
  estimate > 50000 as is_estimate
from approximation;
`.trim()}}],779262);let X=`
  DROP TYPE IF EXISTS pg_temp.tabledefs CASCADE;
  CREATE TYPE pg_temp.tabledefs AS ENUM ('PKEY_INTERNAL','PKEY_EXTERNAL','FKEYS_INTERNAL', 'FKEYS_EXTERNAL', 'COMMENTS', 'FKEYS_NONE', 'INCLUDE_TRIGGERS', 'NO_TRIGGERS');

  -- SELECT * FROM pg_temp.pg_get_coldef('sample','orders','id');
  -- DROP FUNCTION pg_temp.pg_get_coldef(text,text,text,boolean);
  CREATE OR REPLACE FUNCTION pg_temp.pg_get_coldef(
    in_schema text,
    in_table  text,
    in_column text,
    oldway    boolean default False
  )
  RETURNS text
  LANGUAGE plpgsql VOLATILE
  AS
  $$
  DECLARE
  v_coldef     text;
  v_dt1        text;
  v_dt2        text;
  v_dt3        text;
  v_nullable   boolean;
  v_position   int;
  v_identity   text;
  v_generated  text;
  v_hasdflt    boolean;
  v_dfltexpr   text;

  BEGIN
    IF oldway THEN
      SELECT pg_catalog.format_type(a.atttypid, a.atttypmod) INTO v_coldef FROM pg_namespace n, pg_class c, pg_attribute a, pg_type t
      WHERE n.nspname = in_schema AND n.oid = c.relnamespace AND c.relname = in_table AND a.attname = in_column and a.attnum > 0 AND a.attrelid = c.oid AND a.atttypid = t.oid ORDER BY a.attnum;
      -- RAISE NOTICE 'DEBUG: oldway=%',v_coldef;
    ELSE
      -- a.attrelid::regclass::text, a.attname
      SELECT CASE WHEN a.atttypid = ANY ('{int,int8,int2}'::regtype[]) AND EXISTS (SELECT FROM pg_attrdef ad WHERE ad.adrelid = a.attrelid AND ad.adnum   = a.attnum AND
      pg_get_expr(ad.adbin, ad.adrelid) = 'nextval(''' || (pg_get_serial_sequence (a.attrelid::regclass::text, a.attname))::regclass || '''::regclass)') THEN CASE a.atttypid
      WHEN 'int'::regtype  THEN 'serial' WHEN 'int8'::regtype THEN 'bigserial' WHEN 'int2'::regtype THEN 'smallserial' END ELSE format_type(a.atttypid, a.atttypmod) END AS data_type
      INTO v_coldef FROM pg_namespace n, pg_class c, pg_attribute a, pg_type t
      WHERE n.nspname = in_schema AND n.oid = c.relnamespace AND c.relname = in_table AND a.attname = in_column and a.attnum > 0 AND a.attrelid = c.oid AND a.atttypid = t.oid ORDER BY a.attnum;
      -- RAISE NOTICE 'DEBUG: newway=%',v_coldef;

      -- Issue#24: not implemented yet
      -- might replace with this below to do more detailed parsing...
      -- SELECT a.atttypid::regtype AS dt1, format_type(a.atttypid, a.atttypmod) as dt2, t.typname as dt3, CASE WHEN not(a.attnotnull) THEN True ELSE False END AS nullable,
      -- a.attnum, a.attidentity, a.attgenerated, a.atthasdef, pg_get_expr(ad.adbin, ad.adrelid) dfltexpr
      -- INTO v_dt1, v_dt2, v_dt3, v_nullable, v_position, v_identity, v_generated, v_hasdflt, v_dfltexpr
      -- FROM pg_attribute a JOIN pg_class c ON (a.attrelid = c.oid) JOIN pg_type t ON (a.atttypid = t.oid) LEFT JOIN pg_attrdef ad ON (a.attrelid = ad.adrelid AND a.attnum = ad.adnum)
      -- WHERE c.relkind in ('r','p') AND a.attnum > 0 AND NOT a.attisdropped AND c.relnamespace::regnamespace::text = in_schema AND c.relname = in_table AND a.attname = in_column;
      -- RAISE NOTICE 'schema=%  table=%  column=%  dt1=%  dt2=%  dt3=%  nullable=%  pos=%  identity=%   generated=%  HasDefault=%  DeftExpr=%', in_schema, in_table, in_column, v_dt1,v_dt2,v_dt3,v_nullable,v_position,v_identity,v_generated,v_hasdflt,v_dfltexpr;
    END IF;
    RETURN v_coldef;
  END;
  $$;

  -- SELECT * FROM pg_temp.pg_get_tabledef('sample', 'address', false);
  DROP FUNCTION IF EXISTS pg_temp.pg_get_tabledef(character varying,character varying,boolean,tabledefs[]);
  CREATE OR REPLACE FUNCTION pg_temp.pg_get_tabledef(
    in_schema varchar,
    in_table varchar,
    _verbose boolean,
    VARIADIC arr pg_temp.tabledefs[] DEFAULT '{}':: pg_temp.tabledefs[]
  )
  RETURNS text
  LANGUAGE plpgsql VOLATILE
  AS
  $$
    DECLARE
      v_qualified text := '';
      v_table_ddl text;
      v_table_oid int;
      v_colrec record;
      v_constraintrec record;
      v_trigrec       record;
      v_indexrec record;
      v_rec           record;
      v_constraint_name text;
      v_constraint_def  text;
      v_pkey_def        text := '';
      v_fkey_def        text := '';
      v_fkey_defs       text := '';
      v_trigger text := '';
      v_partition_key text := '';
      v_partbound text;
      v_parent text;
      v_parent_schema text;
      v_persist text;
      v_temp  text := '';
      v_temp2 text;
      v_relopts text;
      v_tablespace text;
      v_pgversion int;
      bSerial boolean;
      bPartition boolean;
      bInheritance boolean;
      bRelispartition boolean;
      constraintarr text[] := '{}';
      constraintelement text;
      bSkip boolean;
      bVerbose boolean := False;
      v_cnt1   integer;
      v_cnt2   integer;
      search_path_old text := '';
      search_path_new text := '';
      v_partial    boolean;
      v_pos        integer;

      -- assume defaults for ENUMs at the getgo
      pkcnt            int := 0;
      fkcnt            int := 0;
      trigcnt          int := 0;
      cmtcnt           int := 0;
      pktype           pg_temp.tabledefs := 'PKEY_INTERNAL';
      fktype           pg_temp.tabledefs := 'FKEYS_INTERNAL';
      trigtype         pg_temp.tabledefs := 'NO_TRIGGERS';
      arglen           integer;
      vargs            text;
      avarg            pg_temp.tabledefs;

      -- exception variables
      v_ret            text;
      v_diag1          text;
      v_diag2          text;
      v_diag3          text;
      v_diag4          text;
      v_diag5          text;
      v_diag6          text;

    BEGIN
      SET client_min_messages = 'notice';
      IF _verbose THEN bVerbose = True; END IF;

      -- v17 fix: handle case-sensitive
      -- v_qualified = in_schema || '.' || in_table;

      arglen := array_length($4, 1);
      IF arglen IS NULL THEN
          -- nothing to do, so assume defaults
          NULL;
      ELSE
          -- loop thru args
          -- IF 'NO_TRIGGERS' = ANY ($4)
          -- select array_to_string($4, ',', '***') INTO vargs;
          IF bVerbose THEN RAISE NOTICE 'arguments=%', $4; END IF;
          FOREACH avarg IN ARRAY $4 LOOP
              IF bVerbose THEN RAISE NOTICE 'arg=%', avarg; END IF;
              IF avarg = 'FKEYS_INTERNAL' OR avarg = 'FKEYS_EXTERNAL' OR avarg = 'FKEYS_NONE' THEN
                  fkcnt = fkcnt + 1;
                  fktype = avarg;
              ELSEIF avarg = 'INCLUDE_TRIGGERS' OR avarg = 'NO_TRIGGERS' THEN
                  trigcnt = trigcnt + 1;
                  trigtype = avarg;
              ELSEIF avarg = 'PKEY_EXTERNAL' THEN
                  pkcnt = pkcnt + 1;
                  pktype = avarg;
              ELSEIF avarg = 'COMMENTS' THEN
                  cmtcnt = cmtcnt + 1;

              END IF;
          END LOOP;
          IF fkcnt > 1 THEN
              RAISE WARNING 'Only one foreign key option can be provided. You provided %', fkcnt;
              RETURN '';
          ELSEIF trigcnt > 1 THEN
              RAISE WARNING 'Only one trigger option can be provided. You provided %', trigcnt;
              RETURN '';
          ELSEIF pkcnt > 1 THEN
              RAISE WARNING 'Only one pkey option can be provided. You provided %', pkcnt;
              RETURN '';
          ELSEIF cmtcnt > 1 THEN
              RAISE WARNING 'Only one comments option can be provided. You provided %', cmtcnt;
              RETURN '';

          END IF;
      END IF;

      SELECT c.oid, (select setting from pg_settings where name = 'server_version_num') INTO v_table_oid, v_pgversion FROM pg_catalog.pg_class c LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
      WHERE c.relkind in ('r','p') AND c.relname = in_table AND n.nspname = in_schema;

    -- set search_path = public before we do anything to force explicit schema qualification but dont forget to set it back before exiting...
      SELECT setting INTO search_path_old FROM pg_settings WHERE name = 'search_path';

      -- RAISE NOTICE 'DEBUG tableddl: saving old search_path: ***%***', search_path_old;
      EXECUTE 'SET search_path = "public"';
      SELECT setting INTO search_path_new FROM pg_settings WHERE name = 'search_path';
      -- RAISE NOTICE 'DEBUG tableddl: using new search path=***%***', search_path_new;

      -- throw an error if table was not found
      IF (v_table_oid IS NULL) THEN
        RAISE EXCEPTION 'table does not exist';
      END IF;

      -- get user-defined tablespaces if applicable
      SELECT tablespace INTO v_temp FROM pg_tables WHERE schemaname = in_schema and tablename = in_table and tablespace IS NOT NULL;
      IF v_temp IS NULL THEN
        v_tablespace := 'TABLESPACE pg_default';
      ELSE
        v_tablespace := 'TABLESPACE ' || v_temp;
      END IF;

      -- also see if there are any SET commands for this table, ie, autovacuum_enabled=off, fillfactor=70
      WITH relopts AS (SELECT unnest(c.reloptions) relopts FROM pg_class c, pg_namespace n WHERE n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table)
      SELECT string_agg(r.relopts, ', ') as relopts INTO v_temp from relopts r;
      IF v_temp IS NULL THEN
        v_relopts := '';
      ELSE
        v_relopts := ' WITH (' || v_temp || ')';
      END IF;

      -- -----------------------------------------------------------------------------------
      -- Create table defs for partitions/children using inheritance or declarative methods.
      -- inheritance: pg_class.relkind = 'r'   pg_class.relispartition=false   pg_class.relpartbound is NULL
      -- declarative: pg_class.relkind = 'r'   pg_class.relispartition=true    pg_class.relpartbound is NOT NULL
      -- -----------------------------------------------------------------------------------
      v_partbound := '';
      bPartition := False;
      bInheritance := False;
      IF v_pgversion < 100000 THEN
        -- Issue#11: handle parent schema
        SELECT c2.relname parent, c2.relnamespace::regnamespace INTO v_parent, v_parent_schema from pg_class c1, pg_namespace n, pg_inherits i, pg_class c2
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.oid = i.inhrelid and i.inhparent = c2.oid and c1.relkind = 'r';
        IF (v_parent IS NOT NULL) THEN
          bPartition   := True;
          bInheritance := True;
        END IF;
      ELSE
        -- Issue#11: handle parent schema
        SELECT c2.relname parent, c1.relispartition, pg_get_expr(c1.relpartbound, c1.oid, true), c2.relnamespace::regnamespace INTO v_parent, bRelispartition, v_partbound, v_parent_schema from pg_class c1, pg_namespace n, pg_inherits i, pg_class c2
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.oid = i.inhrelid and i.inhparent = c2.oid and c1.relkind = 'r';
        IF (v_parent IS NOT NULL) THEN
          bPartition   := True;
          IF bRelispartition THEN
            bInheritance := False;
          ELSE
            bInheritance := True;
          END IF;
        END IF;
      END IF;
      IF bPartition THEN
        --Issue#17 fix for case-sensitive tables
        -- SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        -- WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = quote_ident(in_schema) AND t.table_name = quote_ident(in_table) AND t.table_type = 'BASE TABLE');
        SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = in_schema AND t.table_name = in_table AND t.table_type = 'BASE TABLE');

        --Issue#19 put double-quotes around SQL keyword column names
        -- Issue#121: fix keyword lookup for table name not column name that does not apply here
        -- SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = v_colrec.column_name AND catcode = 'R';
        SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = in_table AND catcode = 'R';

        IF bInheritance THEN
          -- inheritance-based
          IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
            v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '"( '|| E'\\n';
          ELSE
            v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || '( '|| E'\\n';
          END IF;

          -- Jump to constraints section to add the check constraints
        ELSE
          -- declarative-based
          IF v_relopts <> '' THEN
            IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
              v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '" PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || v_relopts || ' ' || v_tablespace || '; ' || E'\\n';
            ELSE
              v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || ' PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || v_relopts || ' ' || v_tablespace || '; ' || E'\\n';
            END IF;
          ELSE
            IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
              v_table_ddl := 'CREATE TABLE ' || in_schema || '."' || in_table || '" PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || ' ' || v_tablespace || '; ' || E'\\n';
            ELSE
              v_table_ddl := 'CREATE TABLE ' || in_schema || '.' || in_table || ' PARTITION OF ' || in_schema || '.' || v_parent || ' ' || v_partbound || ' ' || v_tablespace || '; ' || E'\\n';
            END IF;
          END IF;
          -- Jump to constraints and index section to add the check constraints and indexes and perhaps FKeys
        END IF;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(1)tabledef so far: %', v_table_ddl; END IF;

      IF NOT bPartition THEN
        -- see if this is unlogged or temporary table
        select c.relpersistence into v_persist from pg_class c, pg_namespace n where n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table and c.relkind = 'r';
        IF v_persist = 'u' THEN
          v_temp := 'UNLOGGED';
        ELSIF v_persist = 't' THEN
          v_temp := 'TEMPORARY';
        ELSE
          v_temp := '';
        END IF;
      END IF;

      -- start the create definition for regular tables unless we are in progress creating an inheritance-based child table
      IF NOT bPartition THEN
        --Issue#17 fix for case-sensitive tables
        -- SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        -- WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = quote_ident(in_schema) AND t.table_name = quote_ident(in_table) AND t.table_type = 'BASE TABLE');
        SELECT count(*) INTO v_cnt1 FROM information_schema.tables t WHERE EXISTS (SELECT REGEXP_MATCHES(s.table_name, '([A-Z]+)','g') FROM information_schema.tables s
        WHERE t.table_schema=s.table_schema AND t.table_name=s.table_name AND t.table_schema = in_schema AND t.table_name = in_table AND t.table_type = 'BASE TABLE');
        IF v_cnt1 > 0 THEN
          v_table_ddl := 'CREATE ' || v_temp || ' TABLE ' || in_schema || '."' || in_table || '" (' || E'\\n';
        ELSE
          v_table_ddl := 'CREATE ' || v_temp || ' TABLE ' || in_schema || '.' || in_table || ' (' || E'\\n';
        END IF;
      END IF;
      -- RAISE NOTICE 'DEBUG2: tabledef so far: %', v_table_ddl;
      -- define all of the columns in the table unless we are in progress creating an inheritance-based child table
      IF NOT bPartition THEN
        FOR v_colrec IN
          SELECT c.column_name, c.data_type, c.udt_name, c.udt_schema, c.character_maximum_length, c.is_nullable, c.column_default, c.numeric_precision, c.numeric_scale, c.is_identity, c.identity_generation, c.is_generated, c.generation_expression
          FROM information_schema.columns c WHERE (table_schema, table_name) = (in_schema, in_table) ORDER BY ordinal_position
        LOOP
          IF bVerbose THEN RAISE NOTICE '(col loop) name=%  type=%  udt_name=%  default=%  is_generated=%  gen_expr=%', v_colrec.column_name, v_colrec.data_type, v_colrec.udt_name, v_colrec.column_default, v_colrec.is_generated, v_colrec.generation_expression; END IF;

          -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
          -- SELECT CASE WHEN pg_get_serial_sequence(v_qualified, v_colrec.column_name) IS NOT NULL THEN True ELSE False END into bSerial;
          SELECT CASE WHEN pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) IS NOT NULL THEN True ELSE False END into bSerial;
          IF bVerbose THEN
            -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
            -- SELECT pg_get_serial_sequence(v_qualified, v_colrec.column_name) into v_temp;
            SELECT pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) into v_temp;
            IF v_temp IS NULL THEN v_temp = 'NA'; END IF;
            SELECT pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name) INTO v_diag1;
            RAISE NOTICE 'DEBUG table: %  Column: %  datatype: %  Serial=%  serialval=%  coldef=%', v_qualified, v_colrec.column_name, v_colrec.data_type, bSerial, v_temp, v_diag1;
            RAISE NOTICE 'DEBUG tabledef: %', v_table_ddl;
          END IF;

          --Issue#17 put double-quotes around case-sensitive column names
          SELECT COUNT(*) INTO v_cnt1 FROM information_schema.columns t WHERE EXISTS (SELECT REGEXP_MATCHES(s.column_name, '([A-Z]+)','g') FROM information_schema.columns s
          WHERE t.table_schema=s.table_schema and t.table_name=s.table_name and t.column_name=s.column_name AND t.table_schema = quote_ident(in_schema) AND column_name = v_colrec.column_name);

          --Issue#19 put double-quotes around SQL keyword column names
          SELECT COUNT(*) INTO v_cnt2 FROM pg_get_keywords() WHERE word = v_colrec.column_name AND catcode = 'R';

          IF v_cnt1 > 0 OR v_cnt2 > 0 THEN
            v_table_ddl := v_table_ddl || '  "' || v_colrec.column_name || '" ';
          ELSE
            v_table_ddl := v_table_ddl || '  ' || v_colrec.column_name || ' ';
          END IF;

          -- Issue#23: Handle autogenerated columns and rewrite as a simpler IF THEN ELSE branch instead of a much more complex embedded CASE STATEMENT
          IF v_colrec.is_generated = 'ALWAYS' and v_colrec.generation_expression IS NOT NULL THEN
              -- searchable tsvector GENERATED ALWAYS AS (to_tsvector('simple'::regconfig, COALESCE(translate(email, '@.-'::citext, ' '::text), ''::text)) ) STORED
              v_temp = v_colrec.data_type || ' GENERATED ALWAYS AS (' || v_colrec.generation_expression || ') STORED ';
          ELSEIF v_colrec.udt_name in ('geometry', 'box2d', 'box2df', 'box3d', 'geography', 'geometry_dump', 'gidx', 'spheroid', 'valid_detail') THEN
              v_temp = v_colrec.udt_name;
          ELSEIF v_colrec.data_type = 'USER-DEFINED' THEN
              v_temp = v_colrec.udt_schema || '.' || v_colrec.udt_name;
          ELSEIF v_colrec.data_type = 'ARRAY' THEN
                -- Issue#6 fix: handle arrays
              v_temp = pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name);
              -- v17 fix: handle case-sensitive for pg_get_serial_sequence that requires SQL Identifier handling
              -- WHEN pg_get_serial_sequence(v_qualified, v_colrec.column_name) IS NOT NULL
          ELSEIF pg_get_serial_sequence(quote_ident(in_schema) || '.' || quote_ident(in_table), v_colrec.column_name) IS NOT NULL THEN
              -- Issue#8 fix: handle serial. Note: NOT NULL is implied so no need to declare it explicitly
              v_temp = pg_temp.pg_get_coldef(in_schema, in_table,v_colrec.column_name);
          ELSE
              v_temp = v_colrec.data_type;
          END IF;
          -- RAISE NOTICE 'column def1=%', v_temp;

          -- handle IDENTITY columns
          IF v_colrec.is_identity = 'YES' THEN
              IF v_colrec.identity_generation = 'ALWAYS' THEN
                  v_temp = v_temp || ' GENERATED ALWAYS AS IDENTITY';
              ELSE
                  v_temp = v_temp || ' GENERATED BY DEFAULT AS IDENTITY';
              END IF;
          ELSEIF v_colrec.character_maximum_length IS NOT NULL THEN
              v_temp = v_temp || ('(' || v_colrec.character_maximum_length || ')');
          ELSEIF v_colrec.numeric_precision > 0 AND v_colrec.numeric_scale > 0 THEN
              v_temp = v_temp || '(' || v_colrec.numeric_precision || ',' || v_colrec.numeric_scale || ')';
          END IF;

          -- Handle NULL/NOT NULL
          IF bSerial THEN
              v_temp = v_temp || ' NOT NULL';
          ELSEIF v_colrec.is_nullable = 'NO' THEN
              v_temp = v_temp || ' NOT NULL';
          ELSEIF v_colrec.is_nullable = 'YES' THEN
              v_temp = v_temp || ' NULL';
          END IF;

          -- Handle defaults
          IF v_colrec.column_default IS NOT null AND NOT bSerial THEN
              -- RAISE NOTICE 'Setting default for column, %', v_colrec.column_name;
              v_temp = v_temp || (' DEFAULT ' || v_colrec.column_default);
          END IF;
          v_temp = v_temp || ',' || E'\\n';
          -- RAISE NOTICE 'column def2=%', v_temp;
          v_table_ddl := v_table_ddl || v_temp;
          -- RAISE NOTICE 'tabledef=%', v_table_ddl;

        END LOOP;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(2)tabledef so far: %', v_table_ddl; END IF;

      -- define all the constraints: conparentid does not exist pre PGv11
      IF v_pgversion < 110000 THEN
        FOR v_constraintrec IN
          SELECT con.conname as constraint_name, con.contype as constraint_type,
            CASE
              WHEN con.contype = 'p' THEN 1 -- primary key constraint
              WHEN con.contype = 'u' THEN 2 -- unique constraint
              WHEN con.contype = 'f' THEN 3 -- foreign key constraint
              WHEN con.contype = 'c' THEN 4
              ELSE 5
            END as type_rank,
            pg_get_constraintdef(con.oid) as constraint_definition
          FROM pg_catalog.pg_constraint con JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace
          WHERE nsp.nspname = in_schema AND rel.relname = in_table ORDER BY type_rank
        LOOP
          v_constraint_name := v_constraintrec.constraint_name;
          v_constraint_def  := v_constraintrec.constraint_definition;
          IF v_constraintrec.type_rank = 1 THEN
              IF pkcnt = 0 OR pktype = 'PKEY_INTERNAL' THEN
                  -- internal def
                  v_constraint_name := v_constraintrec.constraint_name;
                  v_constraint_def  := v_constraintrec.constraint_definition;
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                -- Issue#16 handle external PG def
                SELECT 'ALTER TABLE ONLY ' || in_schema || '.' || c.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_pkey_def
                FROM pg_catalog.pg_constraint r, pg_class c, pg_namespace n where r.conrelid = c.oid and  r.contype = 'p' and n.oid = r.connamespace and n.nspname = in_schema AND c.relname = in_table and r.conname = v_constraint_name;
              END IF;
              IF bPartition THEN
                continue;
              END IF;
          ELSIF v_constraintrec.type_rank = 3 THEN
              -- handle foreign key constraints
              --Issue#22 fix: added FKEY_NONE check
              IF fktype = 'FKEYS_NONE' THEN
                  -- skip
                  continue;
              ELSIF fkcnt = 0 OR fktype = 'FKEYS_INTERNAL' THEN
                  -- internal def
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                  -- external def
                  SELECT 'ALTER TABLE ONLY ' || n.nspname || '.' || c2.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_fkey_def
                  FROM pg_constraint r, pg_class c1, pg_namespace n, pg_class c2 where r.conrelid = c1.oid and  r.contype = 'f' and n.nspname = in_schema and n.oid = r.connamespace and r.conrelid = c2.oid and c2.relname = in_table;
                  v_fkey_defs = v_fkey_defs || v_fkey_def || E'\\n';
              END IF;
          ELSE
              -- handle all other constraints besides PKEY and FKEYS as internal defs by default
              v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                || 'CONSTRAINT' || ' '
                || v_constraint_name || ' '
                || v_constraint_def
                || ',' || E'\\n';
          END IF;
          if bVerbose THEN RAISE NOTICE 'DEBUG4: constraint name=% constraint_def=%', v_constraint_name,v_constraint_def; END IF;
          constraintarr := constraintarr || v_constraintrec.constraint_name:: text;

        END LOOP;
      ELSE
        -- handle PG versions 11 and up
        -- Issue#20: Fix logic for external PKEY and FKEYS
        FOR v_constraintrec IN
          SELECT con.conname as constraint_name, con.contype as constraint_type,
            CASE
              WHEN con.contype = 'p' THEN 1 -- primary key constraint
              WHEN con.contype = 'u' THEN 2 -- unique constraint
              WHEN con.contype = 'f' THEN 3 -- foreign key constraint
              WHEN con.contype = 'c' THEN 4
              ELSE 5
            END as type_rank,
            pg_get_constraintdef(con.oid) as constraint_definition
          FROM pg_catalog.pg_constraint con JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid JOIN pg_catalog.pg_namespace nsp ON nsp.oid = connamespace
          WHERE nsp.nspname = in_schema AND rel.relname = in_table
                --Issue#13 added this condition:
                AND con.conparentid = 0
                ORDER BY type_rank
        LOOP
          v_constraint_name := v_constraintrec.constraint_name;
          v_constraint_def  := v_constraintrec.constraint_definition;
          IF v_constraintrec.type_rank = 1 THEN
              IF pkcnt = 0 OR pktype = 'PKEY_INTERNAL' THEN
                  -- internal def
                  v_constraint_name := v_constraintrec.constraint_name;
                  v_constraint_def  := v_constraintrec.constraint_definition;
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                -- Issue#16 handle external PG def
                SELECT 'ALTER TABLE ONLY ' || in_schema || '.' || c.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_pkey_def
                FROM pg_catalog.pg_constraint r, pg_class c, pg_namespace n where r.conrelid = c.oid and  r.contype = 'p' and n.oid = r.connamespace and n.nspname = in_schema AND c.relname = in_table;
              END IF;
              IF bPartition THEN
                continue;
              END IF;
          ELSIF v_constraintrec.type_rank = 3 THEN
              -- handle foreign key constraints
              --Issue#22 fix: added FKEY_NONE check
              IF fktype = 'FKEYS_NONE' THEN
                  -- skip
                  continue;
              ELSIF fkcnt = 0 OR fktype = 'FKEYS_INTERNAL' THEN
                  -- internal def
                  v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                    || 'CONSTRAINT' || ' '
                    || v_constraint_name || ' '
                    || v_constraint_def
                    || ',' || E'\\n';
              ELSE
                  -- external def
                  SELECT 'ALTER TABLE ONLY ' || n.nspname || '.' || c2.relname || ' ADD CONSTRAINT ' || r.conname || ' ' || pg_catalog.pg_get_constraintdef(r.oid, true) || ';' INTO v_fkey_def
                  FROM pg_constraint r, pg_class c1, pg_namespace n, pg_class c2 where r.conrelid = c1.oid and  r.contype = 'f' and n.nspname = in_schema and n.oid = r.connamespace and r.conrelid = c2.oid and c2.relname = in_table and
                  r.conname = v_constraint_name and r.conparentid = 0;
                  v_fkey_defs = v_fkey_defs || v_fkey_def || E'\\n';
              END IF;
          ELSE
              -- handle all other constraints besides PKEY and FKEYS as internal defs by default
              v_table_ddl := v_table_ddl || '  ' -- note: two char spacer to start, to indent the column
                || 'CONSTRAINT' || ' '
                || v_constraint_name || ' '
                || v_constraint_def
                || ',' || E'\\n';
          END IF;
          if bVerbose THEN RAISE NOTICE 'DEBUG4: constraint name=% constraint_def=%', v_constraint_name,v_constraint_def; END IF;
          constraintarr := constraintarr || v_constraintrec.constraint_name:: text;

        END LOOP;
      END IF;

      -- drop the last comma before ending the create statement, which should be right before the carriage return character
      -- Issue#24: make sure the comma is there before removing it
      select substring(v_table_ddl, length(v_table_ddl) - 1, 1) INTO v_temp;
      IF v_temp = ',' THEN
          v_table_ddl = substr(v_table_ddl, 0, length(v_table_ddl) - 1) || E'\\n';
      END IF;
      IF bVerbose THEN RAISE NOTICE '(3)tabledef so far: %', trim(v_table_ddl); END IF;

      -- ---------------------------------------------------------------------------
      -- at this point we have everything up to the last table-enclosing parenthesis
      -- ---------------------------------------------------------------------------
      IF bVerbose THEN RAISE NOTICE '(4)tabledef so far: %', v_table_ddl; END IF;

      -- See if this is an inheritance-based child table and finish up the table create.
      IF bPartition and bInheritance THEN
        -- Issue#11: handle parent schema
        -- v_table_ddl := v_table_ddl || ') INHERITS (' || in_schema || '.' || v_parent || ') ' || E'\\n' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
        IF v_parent_schema = '' OR v_parent_schema IS NULL THEN v_parent_schema = in_schema; END IF;
        v_table_ddl := v_table_ddl || ') INHERITS (' || v_parent_schema || '.' || v_parent || ') ' || E'\\n' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
      END IF;

      IF v_pgversion >= 100000 AND NOT bPartition and NOT bInheritance THEN
        -- See if this is a partitioned table (pg_class.relkind = 'p') and add the partitioned key
        SELECT pg_get_partkeydef(c1.oid) as partition_key INTO v_partition_key FROM pg_class c1 JOIN pg_namespace n ON (n.oid = c1.relnamespace) LEFT JOIN pg_partitioned_table p ON (c1.oid = p.partrelid)
        WHERE n.nspname = in_schema and n.oid = c1.relnamespace and c1.relname = in_table and c1.relkind = 'p';

        IF v_partition_key IS NOT NULL AND v_partition_key <> '' THEN
          -- add partition clause
          -- NOTE:  cannot specify default tablespace for partitioned relations
          -- v_table_ddl := v_table_ddl || ') PARTITION BY ' || v_partition_key || ' ' || v_tablespace || ';' || E'\\n';
          v_table_ddl := v_table_ddl || ') PARTITION BY ' || v_partition_key || ';' || E'\\n';
        ELSEIF v_relopts <> '' THEN
          v_table_ddl := v_table_ddl || ') ' || v_relopts || ' ' || v_tablespace || ';' || E'\\n';
        ELSE
          -- end the create definition
          v_table_ddl := v_table_ddl || ') ' || v_tablespace || ';' || E'\\n';
        END IF;
      END IF;

      IF bVerbose THEN RAISE NOTICE '(5)tabledef so far: %', v_table_ddl; END IF;

      -- Add closing paren for regular tables
      -- IF NOT bPartition THEN
      -- v_table_ddl := v_table_ddl || ') ' || v_relopts || ' ' || v_tablespace || E';\\n';
      -- END IF;
      -- RAISE NOTICE 'ddlsofar3: %', v_table_ddl;

      -- Issue#16 create the external PKEY def if indicated
      IF v_pkey_def <> '' THEN
          v_table_ddl := v_table_ddl || v_pkey_def || E'\\n';
      END IF;

      -- Issue#20
      IF v_fkey_defs <> '' THEN
            v_table_ddl := v_table_ddl || v_fkey_defs || E'\\n';
      END IF;

      IF bVerbose THEN RAISE NOTICE '(6)tabledef so far: %', v_table_ddl; END IF;

      -- create indexes
      FOR v_indexrec IN
        SELECT indexdef, COALESCE(tablespace, 'pg_default') as tablespace, indexname FROM pg_indexes WHERE (schemaname, tablename) = (in_schema, in_table)
      LOOP
        -- RAISE NOTICE 'DEBUG6: indexname=%  indexdef=%', v_indexrec.indexname, v_indexrec.indexdef;
        -- loop through constraints and skip ones already defined
        bSkip = False;
        FOREACH constraintelement IN ARRAY constraintarr
        LOOP
          IF constraintelement = v_indexrec.indexname THEN
              -- RAISE NOTICE 'DEBUG7: skipping index, %', v_indexrec.indexname;
              bSkip = True;
              EXIT;
          END IF;
        END LOOP;
        if bSkip THEN CONTINUE; END IF;

        -- Add IF NOT EXISTS clause so partition index additions will not be created if declarative partition in effect and index already created on parent
        v_indexrec.indexdef := REPLACE(v_indexrec.indexdef, 'CREATE INDEX', 'CREATE INDEX IF NOT EXISTS');
        -- Fix Issue#26: do it for unique/primary key indexes as well
        v_indexrec.indexdef := REPLACE(v_indexrec.indexdef, 'CREATE UNIQUE INDEX', 'CREATE UNIQUE INDEX IF NOT EXISTS');
        -- RAISE NOTICE 'DEBUG8: adding index, %', v_indexrec.indexname;

        -- NOTE:  cannot specify default tablespace for partitioned relations
        IF v_partition_key IS NOT NULL AND v_partition_key <> '' THEN
            v_table_ddl := v_table_ddl || v_indexrec.indexdef || ';' || E'\\n';
        ELSE
            -- Issue#25: see if partial index or not
            select CASE WHEN i.indpred IS NOT NULL THEN True ELSE False END INTO v_partial
            FROM pg_index i JOIN pg_class c1 ON (i.indexrelid = c1.oid) JOIN pg_class c2 ON (i.indrelid = c2.oid)
            WHERE c1.relnamespace::regnamespace::text = in_schema AND c2.relnamespace::regnamespace::text = in_schema AND c2.relname = in_table AND c1.relname = v_indexrec.indexname;
            IF v_partial THEN
                -- Put tablespace def before WHERE CLAUSE
                v_temp = v_indexrec.indexdef;
                v_pos = POSITION(' WHERE ' IN v_temp);
                v_temp2 = SUBSTRING(v_temp, v_pos);
                v_temp  = SUBSTRING(v_temp, 1, v_pos);
                v_table_ddl := v_table_ddl || v_temp || ' TABLESPACE ' || v_indexrec.tablespace || v_temp2 || ';' || E'\\n';
            ELSE
                v_table_ddl := v_table_ddl || v_indexrec.indexdef || ' TABLESPACE ' || v_indexrec.tablespace || ';' || E'\\n';
            END IF;
        END IF;

      END LOOP;
      IF bVerbose THEN RAISE NOTICE '(7)tabledef so far: %', v_table_ddl; END IF;

      -- Issue#20: added logic for table and column comments
      IF  cmtcnt > 0 THEN
          FOR v_rec IN
            SELECT c.relname, 'COMMENT ON ' || CASE WHEN c.relkind in ('r','p') AND a.attname IS NULL THEN 'TABLE ' WHEN c.relkind in ('r','p') AND a.attname IS NOT NULL THEN 'COLUMN ' WHEN c.relkind = 'f' THEN 'FOREIGN TABLE '
                  WHEN c.relkind = 'm' THEN 'MATERIALIZED VIEW ' WHEN c.relkind = 'v' THEN 'VIEW ' WHEN c.relkind = 'i' THEN 'INDEX ' WHEN c.relkind = 'S' THEN 'SEQUENCE ' ELSE 'XX' END || n.nspname || '.' ||
                  CASE WHEN c.relkind in ('r','p') AND a.attname IS NOT NULL THEN quote_ident(c.relname) || '.' || a.attname ELSE quote_ident(c.relname) END || ' IS '   || quote_literal(d.description) || ';' as ddl
            FROM pg_class c JOIN pg_namespace n ON (n.oid = c.relnamespace) LEFT JOIN pg_description d ON (c.oid = d.objoid) LEFT JOIN pg_attribute a ON (c.oid = a.attrelid AND a.attnum > 0 and a.attnum = d.objsubid)
            WHERE d.description IS NOT NULL AND n.nspname = in_schema AND c.relname = in_table ORDER BY 2 desc, ddl
          LOOP
              --RAISE NOTICE 'comments:%', v_rec.ddl;
              v_table_ddl = v_table_ddl || v_rec.ddl || E'\\n';
          END LOOP;
      END IF;
      IF bVerbose THEN RAISE NOTICE '(8)tabledef so far: %', v_table_ddl; END IF;

      IF trigtype = 'INCLUDE_TRIGGERS' THEN
        -- Issue#14: handle multiple triggers for a table
        FOR v_trigrec IN
            select pg_get_triggerdef(t.oid, True) || ';' as triggerdef FROM pg_trigger t, pg_class c, pg_namespace n
            WHERE n.nspname = in_schema and n.oid = c.relnamespace and c.relname = in_table and c.relkind = 'r' and t.tgrelid = c.oid and NOT t.tgisinternal
        LOOP
            v_table_ddl := v_table_ddl || v_trigrec.triggerdef;
            v_table_ddl := v_table_ddl || E'\\n';
            IF bVerbose THEN RAISE NOTICE 'triggerdef = %', v_trigrec.triggerdef; END IF;
        END LOOP;
      END IF;

      IF bVerbose THEN RAISE NOTICE '(9)tabledef so far: %', v_table_ddl; END IF;
      -- add empty line
      v_table_ddl := v_table_ddl || E'\\n';
      IF bVerbose THEN RAISE NOTICE '(10)tabledef so far: %', v_table_ddl; END IF;

      -- reset search_path back to what it was
      IF search_path_old = '' THEN
        SELECT set_config('search_path', '', false) into v_temp;
      ELSE
        EXECUTE 'SET search_path = ' || search_path_old;
      END IF;

      RETURN v_table_ddl;

      EXCEPTION
      WHEN others THEN
      BEGIN
        GET STACKED DIAGNOSTICS v_diag1 = MESSAGE_TEXT, v_diag2 = PG_EXCEPTION_DETAIL, v_diag3 = PG_EXCEPTION_HINT, v_diag4 = RETURNED_SQLSTATE, v_diag5 = PG_CONTEXT, v_diag6 = PG_EXCEPTION_CONTEXT;
        -- v_ret := 'line=' || v_diag6 || '. '|| v_diag4 || '. ' || v_diag1 || ' .' || v_diag2 || ' .' || v_diag3;
        v_ret := 'line=' || v_diag6 || '. '|| v_diag4 || '. ' || v_diag1;
        RAISE EXCEPTION '%', v_ret;
        -- put additional coding here if necessarY
        RETURN '';
      END;

    END;
  $$;`.trim();function Q({originalTrigger:e,updatedTrigger:t}){let{name:a,activation:n,events:i,schema:r,table:s,function_schema:l,function_name:o,function_args:c}=t;return`
BEGIN;
DROP TRIGGER "${e.name}" ON "${e.schema}"."${e.table}";
CREATE TRIGGER "${a}" ${n} ${i.join(" OR ")} ON "${r}"."${s}" 
  FOR EACH ROW EXECUTE FUNCTION 
  "${l}"."${o}"(${c?.map(R.literal).join(",")??""});
COMMIT;
`.trim()}e.s(["getTableDefinitionSql",0,({id:e})=>`
    ${X}

    with table_info as (
      select 
        n.nspname::text as schema,
        c.relname::text as name
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where c.oid = ${e}
    )
    select pg_temp.pg_get_tabledef (
      t.schema,
      t.name,
      false,
      'FKEYS_INTERNAL',
      'INCLUDE_TRIGGERS'
    ) as definition
    from table_info t;
  `.trim()],538892),e.s(["getDatabaseTriggerUpdateSQL",()=>Q],85205),e.s(["getCreateEnumeratedTypeSQL",0,({schema:e,name:t,values:a,description:n})=>{let i=`create type "${e}"."${t}" as enum (${a.map(e=>`'${e}'`).join(", ")});`,r=void 0!==n?`comment on type "${e}"."${t}" is '${n}';`:"";return(0,N.wrapWithTransaction)(`${i} ${r}`)},"getDeleteEnumeratedTypeSQL",0,({schema:e,name:t})=>`drop type if exists ${e}."${t}"`,"getUpdateEnumeratedTypeSQL",0,({schema:e,name:t,description:a,values:n=[]})=>{let i=[];return t.original!==t.updated&&i.push(`alter type "${e}"."${t.original}" rename to "${t.updated}";`),n.length>0&&n.forEach((a,r)=>{if(a.isNew)if(0===r){let r=n.find(e=>!e.isNew);i.push(`alter type "${e}"."${t.updated}" add value '${a.updated}' before '${r?.original}';`)}else i.push(`alter type "${e}"."${t.updated}" add value '${a.updated}' after '${n[r-1].updated}';`);else a.original!==a.updated&&i.push(`alter type "${e}"."${t.updated}" rename value '${a.original}' to '${a.updated}';`)}),void 0!==a&&i.push(`comment on type "${e}"."${t.updated}" is '${a}';`),(0,N.wrapWithTransaction)(i.join(" "))}],679295),e.s(["getCreateVaultSecretSQL",0,({secret:e,name:t,description:a})=>`
  select vault.create_secret(
      new_secret := ${(0,R.literal)(e)}
    ${t?`, new_name := ${(0,R.literal)(t)}`:""}
    ${a?`, new_description := ${(0,R.literal)(a)}`:""}
  )
  `.trim(),"getUpdateVaultSecretSQL",0,({id:e,secret:t,name:a,description:n})=>`
select vault.update_secret(
    secret_id := ${(0,R.literal)(e)}
  ${t?`, new_secret := ${(0,R.literal)(t)}`:""}
  ${a?`, new_name := ${(0,R.literal)(a)}`:""}
  ${n?`, new_description := ${(0,R.literal)(n)}`:""}
)
`.trim()],826112),e.s(["getViewDefinitionSql",0,({id:e})=>{if(!e)throw Error("id is required");return`
    with table_info as (
      select 
        n.nspname::text as schema,
        c.relname::text as name,
        to_regclass(concat('"', n.nspname, '"."', c.relname, '"')) as regclass
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where c.oid = ${e}
    )
    select pg_get_viewdef(t.regclass, true) as definition
    from table_info t
  `.trim()}],864748),e.s(["getDropConstraintSQL",0,({schema:e,table:t,name:a})=>`ALTER TABLE ${(0,R.ident)(e)}.${(0,R.ident)(t)} DROP CONSTRAINT ${(0,R.ident)(a)}`,"getTableConstraintsSql",0,({id:e})=>`
  with table_info as (
    select 
      n.nspname::text as schema,
      c.relname::text as name,
      to_regclass(concat('"', n.nspname, '"."', c.relname, '"')) as regclass
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where c.oid = ${e}
)
select 
    con.oid as id,
    con.conname as name,
    con.contype as type
from pg_catalog.pg_constraint con
inner join pg_catalog.pg_class rel
        on rel.oid = con.conrelid
inner join pg_catalog.pg_namespace nsp
        on nsp.oid = connamespace
inner join table_info ti
        on ti.schema = nsp.nspname 
        and ti.name = rel.relname;
`.trim()],45160),e.s(["getDuplicateIdentitySequenceSQL",0,({columnName:e,duplicatedTableName:t,sourceTableName:a,sourceTableSchema:n})=>`SELECT setval('${(0,R.ident)(n)}.${(0,R.ident)(`${t}_${e}_seq`)}', (SELECT COALESCE(MAX(${(0,R.ident)(e)}), 1) FROM ${(0,R.ident)(n)}.${(0,R.ident)(a)}));`,"getUpdateIdentitySequenceSQL",0,({schema:e,table:t,column:a})=>`SELECT setval('${(0,R.ident)(e)}.${(0,R.ident)(`${t}_${a}_seq`)}', (SELECT COALESCE(MAX(${(0,R.ident)(a)}), 1) FROM ${(0,R.ident)(e)}.${(0,R.ident)(t)}))`],261126);var V=((t={}).NO_ACTION="a",t.RESTRICT="r",t.CASCADE="c",t.SET_NULL="n",t.SET_DEFAULT="d",t);e.s(["FOREIGN_KEY_CASCADE_ACTION",()=>V,"getAddForeignKeySQL",0,({table:e,foreignKeys:t})=>t.map(t=>{let{deletionAction:a,updateAction:n}=t;return`
      ALTER TABLE ${(0,R.ident)(e.schema)}.${(0,R.ident)(e.name)}
      ADD FOREIGN KEY (${t.columns.map(e=>(0,R.ident)(e.source)).join(", ")})
      REFERENCES ${(0,R.ident)(t.schema)}.${(0,R.ident)(t.table)} (${t.columns.map(e=>(0,R.ident)(e.target)).join(", ")})
      ${"c"===n?"ON UPDATE CASCADE":"r"===n?"ON UPDATE RESTRICT":""}
      ${"c"===a?"ON DELETE CASCADE":"r"===a?"ON DELETE RESTRICT":"d"===a?"ON DELETE SET DEFAULT":"n"===a?"ON DELETE SET NULL":""}
    `.replace(/\s+/g," ").trim()}).join(";")+";","getForeignKeyConstraintsSql",0,({schema:e})=>{if(!e)throw Error("schema is required");return`
SELECT 
  con.oid as id, 
  con.conname as constraint_name, 
  con.confdeltype as deletion_action,
  con.confupdtype as update_action,
  rel.oid as source_id,
  nsp.nspname as source_schema, 
  rel.relname as source_table, 
  (
    SELECT 
      array_agg(
        att.attname 
        ORDER BY 
          un.ord
      ) 
    FROM 
      unnest(con.conkey) WITH ORDINALITY un (attnum, ord) 
      INNER JOIN pg_attribute att ON att.attnum = un.attnum 
    WHERE 
      att.attrelid = rel.oid
  ) source_columns, 
  frel.oid as target_id,
  fnsp.nspname as target_schema, 
  frel.relname as target_table, 
  (
    SELECT 
      array_agg(
        att.attname 
        ORDER BY 
          un.ord
      ) 
    FROM 
      unnest(con.confkey) WITH ORDINALITY un (attnum, ord) 
      INNER JOIN pg_attribute att ON att.attnum = un.attnum 
    WHERE 
      att.attrelid = frel.oid
  ) target_columns 
FROM 
  pg_constraint con 
  INNER JOIN pg_class rel ON rel.oid = con.conrelid 
  INNER JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace 
  INNER JOIN pg_class frel ON frel.oid = con.confrelid 
  INNER JOIN pg_namespace fnsp ON fnsp.oid = frel.relnamespace 
WHERE 
  con.contype = 'f'
  AND nsp.nspname = '${e}'
`.trim()},"getRemoveForeignKeySQL",0,({table:e,foreignKeys:t})=>t.map(t=>`
ALTER TABLE IF EXISTS ${(0,R.ident)(e.schema)}.${(0,R.ident)(e.name)}
DROP CONSTRAINT IF EXISTS ${(0,R.ident)(t.name)}
`.replace(/\s+/g," ").trim()).join(";")+";"],788035),e.s(["getAddPrimaryKeySQL",0,({schema:e,table:t,columns:a})=>{let n=a.map(e=>(0,R.ident)(e)).join(", ");return`ALTER TABLE ${(0,R.ident)(e)}.${(0,R.ident)(t)} ADD PRIMARY KEY (${n})`}],71859),e.s(["getEnableRLSSQL",0,({schema:e,table:t})=>`ALTER TABLE ${(0,R.ident)(e)}.${(0,R.ident)(t)} ENABLE ROW LEVEL SECURITY`],332108),e.s(["getDuplicateRowsSQL",0,({duplicatedTableName:e,sourceTableName:t,sourceTableSchema:a})=>`INSERT INTO ${(0,R.ident)(a)}.${(0,R.ident)(e)} SELECT * FROM ${(0,R.ident)(a)}.${(0,R.ident)(t)};`,"getDuplicateTableSQL",0,({comment:e,duplicatedTableName:t,sourceTableName:a,sourceTableSchema:n})=>[`CREATE TABLE ${(0,R.ident)(n)}.${(0,R.ident)(t)} (LIKE ${(0,R.ident)(n)}.${(0,R.ident)(a)} INCLUDING ALL);`,void 0!=e?`comment on table ${(0,R.ident)(n)}.${(0,R.ident)(t)} is ${(0,R.literal)(e)};`:""].join("\n"),"getTableEditorSql",0,({id:e})=>e?`
    with base_table_info as (
        select
            c.oid::int8 as id,
            nc.nspname as schema,
            c.relname as name,
            c.relkind,
            c.relrowsecurity as rls_enabled,
            c.relforcerowsecurity as rls_forced,
            c.relreplident,
            c.relowner,
            obj_description(c.oid) as comment,
            fs.srvname as foreign_server_name,
            fdw.fdwname as foreign_data_wrapper_name,
            fdw_handler.proname as foreign_data_wrapper_handler
        from pg_class c
        join pg_namespace nc on nc.oid = c.relnamespace
        left join pg_foreign_table ft on ft.ftrelid = c.oid
        left join pg_foreign_server fs on fs.oid = ft.ftserver
        left join pg_foreign_data_wrapper fdw on fdw.oid = fs.srvfdw
        left join pg_proc fdw_handler on fdw.fdwhandler = fdw_handler.oid
        where c.oid = ${e}
            and not pg_is_other_temp_schema(nc.oid)
            and (
                pg_has_role(c.relowner, 'USAGE')
                or has_table_privilege(
                    c.oid,
                    'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
                )
                or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
            )
    ),
    table_stats as (
        select
            b.id,
            case
                when b.relreplident = 'd' then 'DEFAULT'
                when b.relreplident = 'i' then 'INDEX'
                when b.relreplident = 'f' then 'FULL'
                else 'NOTHING'
            end as replica_identity,
            pg_total_relation_size(format('%I.%I', b.schema, b.name))::int8 as bytes,
            pg_size_pretty(pg_total_relation_size(format('%I.%I', b.schema, b.name))) as size,
            pg_stat_get_live_tuples(b.id) as live_rows_estimate,
            pg_stat_get_dead_tuples(b.id) as dead_rows_estimate
        from base_table_info b
        where b.relkind in ('r', 'p')
    ),
    primary_keys as (
        select
            i.indrelid as table_id,
            jsonb_agg(
                jsonb_build_object(
                    'schema', n.nspname,
                    'table_name', c.relname,
                    'table_id', i.indrelid::int8,
                    'name', a.attname
                )
                order by array_position(i.indkey, a.attnum)
            ) as primary_keys
        from pg_index i
        join pg_class c on i.indrelid = c.oid
        join pg_namespace n on c.relnamespace = n.oid
		join pg_attribute a on a.attrelid = c.oid and a.attnum = any(i.indkey)
        where i.indisprimary
        group by i.indrelid
    ),
    index_cols as (
        select
            i.indrelid as table_id,
            i.indkey,
            array_agg(
                a.attname
                order by array_position(i.indkey, a.attnum)
            ) as columns
        from pg_index i
        join pg_class c on i.indrelid = c.oid
        join pg_attribute a on a.attrelid = c.oid
            and a.attnum = any(i.indkey)
        where i.indisunique
            and i.indisprimary = false
        group by i.indrelid, i.indkey
    ),
    unique_indexes as (
        select
            ic.table_id,
            jsonb_agg(
                jsonb_build_object(
                    'schema', n.nspname,
                    'table_name', c.relname,
                    'table_id', ic.table_id::int8,
                    'columns', ic.columns
                )
            ) as unique_indexes
        from index_cols ic
        join pg_class c on c.oid = ic.table_id
        join pg_namespace n on n.oid = c.relnamespace
        group by ic.table_id
    ),
    relationships as (
        select
            c.conrelid as source_id,
            c.confrelid as target_id,
            jsonb_build_object(
                'id', c.oid::int8,
                'constraint_name', c.conname,
                'deletion_action', c.confdeltype,
                'update_action', c.confupdtype,
                'source_schema', nsa.nspname,
                'source_table_name', csa.relname,
                'source_column_name', sa.attname,
                'target_table_schema', nta.nspname,
                'target_table_name', cta.relname,
                'target_column_name', ta.attname
            ) as rel_info
        from pg_constraint c
        join pg_class csa on c.conrelid = csa.oid
        join pg_namespace nsa on csa.relnamespace = nsa.oid
        join pg_attribute sa on (sa.attrelid = c.conrelid and sa.attnum = any(c.conkey))
        join pg_class cta on c.confrelid = cta.oid
        join pg_namespace nta on cta.relnamespace = nta.oid
        join pg_attribute ta on (ta.attrelid = c.confrelid and ta.attnum = any(c.confkey))
        where c.contype = 'f'
    ),
    columns as (
        select
            a.attrelid as table_id,
            jsonb_agg(jsonb_build_object(
                'id', (a.attrelid || '.' || a.attnum),
                'table_id', c.oid::int8,
                'schema', nc.nspname,
                'table', c.relname,
                'ordinal_position', a.attnum,
                'name', a.attname,
                'default_value', case
                    when a.atthasdef then pg_get_expr(ad.adbin, ad.adrelid)
                    else null
                end,
                'data_type', case
                    when t.typtype = 'd' then
                        case
                            when bt.typelem <> 0::oid and bt.typlen = -1 then 'ARRAY'
                            when nbt.nspname = 'pg_catalog' then format_type(t.typbasetype, null)
                            else 'USER-DEFINED'
                        end
                    else
                        case
                            when t.typelem <> 0::oid and t.typlen = -1 then 'ARRAY'
                            when nt.nspname = 'pg_catalog' then format_type(a.atttypid, null)
                            else 'USER-DEFINED'
                        end
                end,
                'format', case
                    when t.typtype = 'e' then
                        case
                            when nt.nspname <> 'public' then concat(nt.nspname, '.', coalesce(bt.typname, t.typname))
                            else coalesce(bt.typname, t.typname)
                        end
                    else
                        coalesce(bt.typname, t.typname)
                end,
                'is_identity', a.attidentity in ('a', 'd'),
                'identity_generation', case a.attidentity
                    when 'a' then 'ALWAYS'
                    when 'd' then 'BY DEFAULT'
                    else null
                end,
                'is_generated', a.attgenerated in ('s'),
                'is_nullable', not (a.attnotnull or t.typtype = 'd' and t.typnotnull),
                'is_updatable', (
                    b.relkind in ('r', 'p') or
                    (b.relkind in ('v', 'f') and pg_column_is_updatable(b.id, a.attnum, false))
                ),
                'is_unique', uniques.table_id is not null,
                'check', check_constraints.definition,
                'comment', col_description(c.oid, a.attnum),
                'enums', coalesce(
                    (
                        select jsonb_agg(e.enumlabel order by e.enumsortorder)
                        from pg_catalog.pg_enum e
                        where e.enumtypid = coalesce(bt.oid, t.oid)
                            or e.enumtypid = coalesce(bt.typelem, t.typelem)
                    ),
                    '[]'::jsonb
                )
            ) order by a.attnum) as columns
        from pg_attribute a
        join base_table_info b on a.attrelid = b.id
        join pg_class c on a.attrelid = c.oid
        join pg_namespace nc on c.relnamespace = nc.oid
        left join pg_attrdef ad on (a.attrelid = ad.adrelid and a.attnum = ad.adnum)
        join pg_type t on a.atttypid = t.oid
        join pg_namespace nt on t.typnamespace = nt.oid
        left join pg_type bt on (t.typtype = 'd' and t.typbasetype = bt.oid)
        left join pg_namespace nbt on bt.typnamespace = nbt.oid
        left join (
            select
                conrelid as table_id,
                conkey[1] as ordinal_position
            from pg_catalog.pg_constraint
            where contype = 'u' and cardinality(conkey) = 1
            group by conrelid, conkey[1]
        ) as uniques on uniques.table_id = a.attrelid and uniques.ordinal_position = a.attnum
        left join (
            select distinct on (conrelid, conkey[1])
                conrelid as table_id,
                conkey[1] as ordinal_position,
                substring(
                    pg_get_constraintdef(oid, true),
                    8,
                    length(pg_get_constraintdef(oid, true)) - 8
                ) as definition
            from pg_constraint
            where contype = 'c' and cardinality(conkey) = 1
            order by conrelid, conkey[1], oid asc
        ) as check_constraints on check_constraints.table_id = a.attrelid
                            and check_constraints.ordinal_position = a.attnum
        where a.attnum > 0
        and not a.attisdropped
        group by a.attrelid
    )
    select
        case b.relkind
            when 'r' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'rls_enabled', b.rls_enabled,
                'rls_forced', b.rls_forced,
                'replica_identity', ts.replica_identity,
                'bytes', ts.bytes,
                'size', ts.size,
                'live_rows_estimate', ts.live_rows_estimate,
                'dead_rows_estimate', ts.dead_rows_estimate,
                'comment', b.comment,
                'primary_keys', coalesce(pk.primary_keys, '[]'::jsonb),
                'unique_indexes', coalesce(ui.unique_indexes, '[]'::jsonb),
                'relationships', coalesce(
                    (select jsonb_agg(r.rel_info)
                    from relationships r
                    where r.source_id = b.id or r.target_id = b.id),
                    '[]'::jsonb
                ),
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
            when 'p' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'rls_enabled', b.rls_enabled,
                'rls_forced', b.rls_forced,
                'replica_identity', ts.replica_identity,
                'bytes', ts.bytes,
                'size', ts.size,
                'live_rows_estimate', ts.live_rows_estimate,
                'dead_rows_estimate', ts.dead_rows_estimate,
                'comment', b.comment,
                'primary_keys', coalesce(pk.primary_keys, '[]'::jsonb),
                'unique_indexes', coalesce(ui.unique_indexes, '[]'::jsonb),
                'relationships', coalesce(
                    (select jsonb_agg(r.rel_info)
                    from relationships r
                    where r.source_id = b.id or r.target_id = b.id),
                    '[]'::jsonb
                ),
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
            when 'v' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'is_updatable', (pg_relation_is_updatable(b.id, false) & 20) = 20,
                'comment', b.comment,
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
            when 'm' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'is_populated', true,
                'comment', b.comment,
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
            when 'f' then jsonb_build_object(
                'entity_type', b.relkind,
                'id', b.id,
                'schema', b.schema,
                'name', b.name,
                'comment', b.comment,
                'foreign_server_name', b.foreign_server_name,
                'foreign_data_wrapper_name', b.foreign_data_wrapper_name,
                'foreign_data_wrapper_handler', b.foreign_data_wrapper_handler,
                'columns', coalesce(c.columns, '[]'::jsonb)
            )
        end as entity
    from base_table_info b
    left join table_stats ts on b.id = ts.id
    left join primary_keys pk on b.id = pk.table_id
    left join unique_indexes ui on b.id = ui.table_id
    left join columns c on b.id = c.table_id;
  `.trim():""],664304),e.s(["getEntityTypesSQL",0,({schemas:e,search:t,sort:a,filterTypes:n,limit:i,page:r})=>`
    with records as (
      select
        c.oid::int8 as "id",
        nc.nspname as "schema",
        c.relname as "name",
        c.relkind as "type",
        case c.relkind
          when 'r' then 1
          when 'v' then 2
          when 'm' then 3
          when 'f' then 4
          when 'p' then 5
        end as "type_sort",
        obj_description(c.oid) as "comment",
        count(*) over() as "count",
        c.relrowsecurity as "rls_enabled"
      from
        pg_namespace nc
        join pg_class c on nc.oid = c.relnamespace
      where
        c.relkind in (${n.map(e=>`'${e}'`).join(", ")})
        and not pg_is_other_temp_schema(nc.oid)
        and (
          pg_has_role(c.relowner, 'USAGE')
          or has_table_privilege(
            c.oid,
            'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
          )
          or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
        )
        and nc.nspname in (${e.map(e=>`'${e}'`)})
        ${t?`and c.relname ilike '%${t}%'`:""}
      order by ${"alphabetical"===a?"c.relname asc":'"type_sort" asc, c.relname asc'}
      limit ${i}
      offset ${r*i}
    )
    select
      jsonb_build_object(
        'entities', coalesce(jsonb_agg(
          jsonb_build_object(
            'id', r.id,
            'schema', r.schema,
            'name', r.name,
            'type', r.type,
            'comment', r.comment,
            'rls_enabled', r.rls_enabled
          )
          order by ${"alphabetical"===a?"r.name asc":"r.type_sort asc, r.name asc"}
        ), '[]'::jsonb),
        'count', coalesce(min(r.count), 0)
      ) "data"
    from records r;
  `.trim()],46166),e.s(["getAbortQuerySQL",0,({pid:e})=>`select pg_terminate_backend(${e})`.trim()],158161),e.s(["getKeywordsSql",0,()=>`
SELECT word FROM pg_get_keywords();
`.trim()],420732),e.s(["getOngoingQueriesSql",0,()=>`
select pid, query, query_start from pg_stat_activity where state = 'active' and datname = 'postgres';
`.trim()],392286);let J="ROLE_IMPERSONATION_NO_RESULTS";e.s(["ROLE_IMPERSONATION_NO_RESULTS",0,J,"ROLE_IMPERSONATION_SQL_LINE_COUNT",0,11,"getImpersonationSQL",0,({role:e,unexpiredClaims:t,sql:a})=>{var n;let i="postgrest"===e.type?void 0!==t?function({role:e,unexpiredClaims:t}){return`
select set_config('role', ${(0,R.literal)(e)}, true),
set_config('request.jwt.claims', ${(0,R.literal)(JSON.stringify(t))}, true),
set_config('request.method', 'POST', true),
set_config('request.path', '/impersonation-example-request-path', true),
set_config('request.headers', '{"accept": "*/*"}', true);
  `.trim()}({role:e.role,unexpiredClaims:t}):"":(n=e.role,`
    set local role ${(0,R.literal)(n)};
  `.trim());return`
    ${i}

    -- If the users sql returns no rows, pg-meta will
    -- fallback to returning the result of the impersonation sql.
    select 1 as "${J}";

    ${a}
  `.trim()}],389273),e.s(["getEnableWebhooksSQL",0,()=>`
BEGIN;
  DO
  $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1
      FROM pg_roles
      WHERE rolname = 'supabase_functions_admin'
    )
    THEN
      CREATE USER supabase_functions_admin NOINHERIT CREATEROLE LOGIN NOREPLICATION;
    END IF;
  END
  $$;

  -- Event trigger for pg_net
  CREATE OR REPLACE FUNCTION extensions.grant_pg_net_access()
  RETURNS event_trigger
  LANGUAGE plpgsql
  AS $$
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_event_trigger_ddl_commands() AS ev
      JOIN pg_extension AS ext
      ON ev.objid = ext.oid
      WHERE ext.extname = 'pg_net'
    )
    THEN
      GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;

      IF EXISTS (
        SELECT FROM pg_extension
        WHERE extname = 'pg_net'
        -- all versions in use on existing projects as of 2025-02-20
        -- version 0.12.0 onwards don't need these applied
        AND extversion IN ('0.2', '0.6', '0.7', '0.7.1', '0.8', '0.10.0', '0.11.0')
      ) THEN
        ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;
        ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;

        ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;
        ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;

        REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;
        REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;

        GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
        GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
      END IF;
    END IF;
  END;
  $$;
  COMMENT ON FUNCTION extensions.grant_pg_net_access IS 'Grants access to pg_net';

  DO
  $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1
      FROM pg_event_trigger
      WHERE evtname = 'issue_pg_net_access'
    ) THEN
      CREATE EVENT TRIGGER issue_pg_net_access ON ddl_command_end WHEN TAG IN ('CREATE EXTENSION')
      EXECUTE PROCEDURE extensions.grant_pg_net_access();
    END IF;
  END
  $$;

  -- pg_net grants when extension is already enabled
  DO
  $$
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_extension
      WHERE extname = 'pg_net'
    )
    THEN
      GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;

      IF EXISTS (
        SELECT FROM pg_extension
        WHERE extname = 'pg_net'
        -- all versions in use on existing projects as of 2025-02-20
        -- version 0.12.0 onwards don't need these applied
        AND extversion IN ('0.2', '0.6', '0.7', '0.7.1', '0.8', '0.10.0', '0.11.0')
      ) THEN
        ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;
        ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;

        ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;
        ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;

        REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;
        REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;

        GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
        GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
      END IF;
    END IF;
  END
  $$;

  -- Create pg_net extension
  CREATE EXTENSION IF NOT EXISTS pg_net SCHEMA extensions;

  -- Create supabase_functions schema
  CREATE SCHEMA supabase_functions AUTHORIZATION supabase_admin;

  GRANT USAGE ON SCHEMA supabase_functions TO postgres, anon, authenticated, service_role;
  ALTER DEFAULT PRIVILEGES IN SCHEMA supabase_functions GRANT ALL ON TABLES TO postgres, anon, authenticated, service_role;
  ALTER DEFAULT PRIVILEGES IN SCHEMA supabase_functions GRANT ALL ON FUNCTIONS TO postgres, anon, authenticated, service_role;
  ALTER DEFAULT PRIVILEGES IN SCHEMA supabase_functions GRANT ALL ON SEQUENCES TO postgres, anon, authenticated, service_role;

  -- supabase_functions.migrations definition
  CREATE TABLE supabase_functions.migrations (
    version text PRIMARY KEY,
    inserted_at timestamptz NOT NULL DEFAULT NOW()
  );

  -- Initial supabase_functions migration
  INSERT INTO supabase_functions.migrations (version) VALUES ('initial');

  -- supabase_functions.hooks definition
  CREATE TABLE supabase_functions.hooks (
    id bigserial PRIMARY KEY,
    hook_table_id integer NOT NULL,
    hook_name text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    request_id bigint
  );
  CREATE INDEX supabase_functions_hooks_request_id_idx ON supabase_functions.hooks USING btree (request_id);
  CREATE INDEX supabase_functions_hooks_h_table_id_h_name_idx ON supabase_functions.hooks USING btree (hook_table_id, hook_name);
  COMMENT ON TABLE supabase_functions.hooks IS 'Supabase Functions Hooks: Audit trail for triggered hooks.';

  CREATE FUNCTION supabase_functions.http_request()
    RETURNS trigger
    LANGUAGE plpgsql
    AS $function$
    DECLARE
      request_id bigint;
      payload jsonb;
      url text := TG_ARGV[0]::text;
      method text := TG_ARGV[1]::text;
      headers jsonb DEFAULT '{}'::jsonb;
      params jsonb DEFAULT '{}'::jsonb;
      timeout_ms integer DEFAULT 1000;
    BEGIN
      IF url IS NULL OR url = 'null' THEN
        RAISE EXCEPTION 'url argument is missing';
      END IF;

      IF method IS NULL OR method = 'null' THEN
        RAISE EXCEPTION 'method argument is missing';
      END IF;

      IF TG_ARGV[2] IS NULL OR TG_ARGV[2] = 'null' THEN
        headers = '{"Content-Type": "application/json"}'::jsonb;
      ELSE
        headers = TG_ARGV[2]::jsonb;
      END IF;

      IF TG_ARGV[3] IS NULL OR TG_ARGV[3] = 'null' THEN
        params = '{}'::jsonb;
      ELSE
        params = TG_ARGV[3]::jsonb;
      END IF;

      IF TG_ARGV[4] IS NULL OR TG_ARGV[4] = 'null' THEN
        timeout_ms = 1000;
      ELSE
        timeout_ms = TG_ARGV[4]::integer;
      END IF;

      CASE
        WHEN method = 'GET' THEN
          SELECT http_get INTO request_id FROM net.http_get(
            url,
            params,
            headers,
            timeout_ms
          );
        WHEN method = 'POST' THEN
          payload = jsonb_build_object(
            'old_record', OLD,
            'record', NEW,
            'type', TG_OP,
            'table', TG_TABLE_NAME,
            'schema', TG_TABLE_SCHEMA
          );

          SELECT http_post INTO request_id FROM net.http_post(
            url,
            payload,
            params,
            headers,
            timeout_ms
          );
        ELSE
          RAISE EXCEPTION 'method argument % is invalid', method;
      END CASE;

      INSERT INTO supabase_functions.hooks
        (hook_table_id, hook_name, request_id)
      VALUES
        (TG_RELID, TG_NAME, request_id);

      RETURN NEW;
    END
  $function$;

  GRANT ALL PRIVILEGES ON SCHEMA supabase_functions TO supabase_functions_admin;
  GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA supabase_functions TO supabase_functions_admin;
  GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA supabase_functions TO supabase_functions_admin;
  ALTER USER supabase_functions_admin SET search_path = "supabase_functions";
  ALTER table "supabase_functions".migrations OWNER TO supabase_functions_admin;
  ALTER table "supabase_functions".hooks OWNER TO supabase_functions_admin;
  ALTER function "supabase_functions".http_request() OWNER TO supabase_functions_admin;
  GRANT supabase_functions_admin TO postgres;

  -- Remove unused supabase_pg_net_admin role
  DO
  $$
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_roles
      WHERE rolname = 'supabase_pg_net_admin'
    )
    THEN
      REASSIGN OWNED BY supabase_pg_net_admin TO supabase_admin;
      DROP OWNED BY supabase_pg_net_admin;
      DROP ROLE supabase_pg_net_admin;
    END IF;
  END
  $$;

  INSERT INTO supabase_functions.migrations (version) VALUES ('20210809183423_update_grants');

  ALTER function supabase_functions.http_request() SECURITY DEFINER;
  ALTER function supabase_functions.http_request() SET search_path = supabase_functions;
  REVOKE ALL ON FUNCTION supabase_functions.http_request() FROM PUBLIC;
  GRANT EXECUTE ON FUNCTION supabase_functions.http_request() TO postgres, anon, authenticated, service_role;

  COMMIT;
`.trim()],480762);let K={roles:p.default,columns:n.default,schemas:m.default,tables:E,functions:l,tablePrivileges:u.default,publications:_.default,extensions:r.default,config:i.default,materializedViews:c.default,foreignTables:s.default,views:h.default,policies:d.default,triggers:g.default,types:f.default,version:b.default,indexes:o.default,columnPrivileges:a.default,query:A};e.s(["default",0,K],850036)}]);

//# debugId=957b0c24-8fd0-ae8a-a6c5-431ae107300e
//# sourceMappingURL=70ee1e395f4f792e.js.map