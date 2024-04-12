import { Button, Table, TableColumnsType } from 'antd'
import styles from './ItemsTable.module.scss'
import { useNavigate } from 'react-router-dom';






export const ItemsTable= ({data, name}: {data: Record<string, any>[], name: string}) => {
  const navigate = useNavigate()

  
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: typeof data) => {
      
    }
  };

   const keys = data.length > 0 ? Object.keys(data[0]): []
   const columns: TableColumnsType = keys?.slice(0,4).map((item)=> {
    return {
      title: item[0].toUpperCase() + item.slice(1),
      dataIndex: item,
    }
   })
   
 

  return (
    <div className={styles.root} >
      <div className={styles.header} >
        <h1 className={styles.title}>{name}</h1>
        <Button className={styles.addBtn} type='primary' onClick={()=> navigate(`add`)} >Добавить</Button>
      </div>
      {data.length > 0 && <Table rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }} className={styles.table} pagination={data.length > 18 && {pageSize: 18, position: ['bottomCenter']}} onRow={(record)=>({onClick: ()=> navigate(`${record.id}`)})} columns={columns} dataSource={data?.map((item)=>{ return {...item, key: item.id as number}})} />}
    </div>
  )
}



