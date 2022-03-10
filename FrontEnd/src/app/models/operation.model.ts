class OperationModel {

    public id: string;
    public accountNumber: number;
    public amount: Number;
    public date: String;
    public interest: Number;
    public payments: Number;
    public typeID: string;
    public operation: {
        id: string,
        name: string
    }

    public static convertToFormData(operation: OperationModel): FormData {
        const myFormData = new FormData();
        
        myFormData.append("accountNumber", operation.accountNumber.toString());
        myFormData.append("amount", operation.amount.toString());
        myFormData.append("date", operation.date.toString());
       if(operation.interest) myFormData.append("interest", operation.interest.toString());
       if(operation.payments) myFormData.append("payments", operation.payments.toString());
        myFormData.append("typeID", operation.typeID);

        
        // Object.entries(product).forEach(([key, value]) => {
        //     if(typeof value === 'string' || value === null) myFormData.append(`${key}`, value);
        //     else if(value === undefined) return;
        //     else myFormData.append(`${key}`, value.toString());
        // });
        // if(product.image) myFormData.append("image", product.image.item(0));
        
        return myFormData;
    }
}

export default OperationModel;