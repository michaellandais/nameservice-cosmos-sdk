import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSetName } from "./types/nameservice/nameservice/tx";
import { MsgBuyName } from "./types/nameservice/nameservice/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/nameservice.nameservice.MsgSetName", MsgSetName],
    ["/nameservice.nameservice.MsgBuyName", MsgBuyName],
    
];

export { msgTypes }