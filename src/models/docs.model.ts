import mongoose,{Schema,Document} from "mongoose";


interface Docs extends Document{
    docsUrl:string;
    docsName:string
}

const docsSchema:Schema<Docs>=new Schema({
    docsUrl:{
        type:String,
        required:[true,"Url is needed"]
    },
    docsName:{
        type:String,
        required:[true,"Docs name is needed"]
    }
},{
    timestamps:true
})

const DocsModel=(mongoose.models.Docs as mongoose.Model<Docs> )||mongoose.model<Docs>('Docs',docsSchema)

export default DocsModel;