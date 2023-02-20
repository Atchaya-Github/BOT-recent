export interface data{
    cloudServiceProviderName: string;
                cloudRegionName: string;
                updatedDateTime: any;
                botUploaded: boolean;
                bot_configuration_id: number;
                user_id:number;
                client_id: number;
                client_name: string;
                application_name: string;
                bot_name: any;
                is_input_required: boolean;
                minimum_ram: number;
                minimum_cpu_percent_per_core: number;
                average_threshold_time_per_input_in_sec: number;
                created_by: string;
                updated_by: string;
                created_date: number;
                updated_date: number;
                comments: string;
                version: any;
                cloud_service_provider_id: number;
                cloud_service_region_id: number;
                is_active: boolean;
                is_multiple_instance_per_vm: boolean;
                site_id: number;
                bot_type: string;
                bot_url: any;
                processing_limit: number;
                delay_from: number;
                delay_to: number;
                retry_time_gap: number;
                cloud_instance_type_id: number;
                category_id: number;
}
export interface Model{
    Code: number;
    Status: string;
    Message: string;
    Data:data[]
    }    