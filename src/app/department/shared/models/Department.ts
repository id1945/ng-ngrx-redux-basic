export class Department {
    constructor(private props: any) { }

    get id(): number { return this.props.dept_id; }
    get code(): string { return this.props.dept_external_code; }
    get name(): string { return this.props.dept_name; }
    get nameAbb() { return this.props.dept_name_abbreviation; }
    get startDate(): Date { return this.props.application_start_date; }
    get endDays(): Date { return this.props.application_end_days; }
    get updateTime(): Date { return this.props.update_time; }
    get deletionFlag(): string { return this.props.deletion_flag; }
    set deletionFlag(flag: string){
        this.props.deletion_flag = flag;
    }
}
