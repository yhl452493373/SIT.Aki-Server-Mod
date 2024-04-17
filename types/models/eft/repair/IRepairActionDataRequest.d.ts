import { IBaseRepairActionDataRequest } from "@spt-aki/models/eft/repair/IBaseRepairActionDataRequest";
export interface IRepairActionDataRequest extends IBaseRepairActionDataRequest {
    Action: "Repair";
    repairKitsInfo: RepairKitsInfo[];
    target: string;
}
export interface RepairKitsInfo {
    _id: string;
    count: number;
}
