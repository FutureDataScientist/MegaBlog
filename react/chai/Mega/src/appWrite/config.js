import conf from '../conf/conf'
import {Client,ID,Database,Storage,Query} from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.databases=new Database(this.client);
        this.bucket=new Storage(this.client);
    }


    async createPost({title,slug,content,featureImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,
                }
            )

        }catch(error){
            console.log("Appwrite  service:: createPost::error",error);
        }
    }
    async updatePost(slug,{title,content,featureImage,status,userId}){
        try{
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug,
            {
                title,
                content,
                featureImage,
                status,
            }

        }catch(error){
            console.log("Appwrite service::updatePosy::error",error);


        }

        
    
}
async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        
        )
        return true
    } catch (error) {
        console.log("Appwrite serive :: deletePost :: error", error);
        return false
    }
}
async getPost(slug){
    await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
    
    )
} catch (error) {
    console.log("Appwrite serive :: deletePost :: error", error);
    
}
async getPosts(queries=[Query.equal("status","active")]){
    try{
        return await this.databases.listDocuments(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
           queries,
        )

    }catch(error){
        console.log("Appwrite serive :: getPosts :: error", error);
        return false
    }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }



}
}


const service=new Service();
export default service