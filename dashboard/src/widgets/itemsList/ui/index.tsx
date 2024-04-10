import { Button, Table, TableColumnsType } from 'antd'
import styles from './ItemsList.module.scss'
import { useNavigate } from 'react-router-dom';






export const ItemsList = ({data}: {data: Record<string, any>[]}) => {
  const navigate = useNavigate()

  
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: typeof data) => {
      
    }
  };

   const keys = Object.keys(data[0])
   const columns: TableColumnsType = keys.map((item)=> {
    return {
      title: item[0].toUpperCase() + item.slice(1),
      dataIndex: item,
    }
   })
   
   columns.push({
    title: <Button type='primary' onClick={()=> navigate(`add`)} >Добавить</Button>,
    dataIndex: ''
   })

  return (
    <div className={styles.root} >
      <Table  rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }} className={styles.table} pagination={{pageSize: 18, position: ['bottomCenter']}} onRow={(record)=>({onClick: ()=> navigate(`${record.id}`)})} columns={columns} dataSource={data.map((item)=>{ return {...item, key: item.id as number}})} />
    </div>
  )
}



