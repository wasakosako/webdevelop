//タスクの型定義
export type tasktype=
    {
        id:string;
        title:string;
        status:boolean;
      }

type detail={
  description?:string;
}

export type tasktypedetail=tasktype&detail;