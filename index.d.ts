declare module  "resty.ipmatcher" {
    interface IpMatcher {
        match(ip:string|any):LuaMultiReturn<[true|false|Record<string,string>, string]>;
        match_bin(ip:any):LuaMultiReturn<[true|false|Record<string,string>, string]>;
    } 
    interface myIpmatcherConstructor {
        new: (this: void,ips:string[]) =>  LuaMultiReturn<[IpMatcher, string]>;
        new_with_value: (this: void,ips:Record<string,any>) => LuaMultiReturn<[IpMatcher, string]>;
        /** @noSelf */
        parse_ipv4(ip:string):true|false
        /** @noSelf */
        parse_ipv6(ip:string):true|false
    }
    const ipmatcher:myIpmatcherConstructor
    export = {
        ...ipmatcher
    }
}