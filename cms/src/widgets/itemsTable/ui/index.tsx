import { Button, Table, TableColumnsType } from 'antd'
import styles from './ItemsTable.module.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DeleteButton } from '../../../features/deleteButton';
import { useDeleteSizeMutation } from '../../../entities/size';
import { useDeleteCategoryMutation } from '../../../entities/category';
import { useDeleteMaterialMutation } from '../../../entities/material';
import { useDeleteProductMutation } from '../../../entities/product';
import { useDeleteColorMutation } from '../../../entities/color';






export const ItemsTable = ({ data, name }: { data: Record<string, any>[], name: string }) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [deleteSize] = useDeleteSizeMutation()
  const [deleteCategory] = useDeleteCategoryMutation()
  const [deleteMaterial] = useDeleteMaterialMutation()
  const [deleteProduct] = useDeleteProductMutation()
  const [deleteColor] = useDeleteColorMutation()
  const navigate = useNavigate()


  
  const handleDelete = () => {
    switch (name) {
      case 'Размеры':
        selectedItems.forEach((item) => deleteSize(item));
        break;
      case 'Категории':
        selectedItems.forEach((item) => deleteCategory(item));
        break;
      case 'Цвета':
        selectedItems.forEach((item) => deleteColor(item));
        break;
      case 'Продукты':
        selectedItems.forEach((item) => deleteProduct(item));
        break;
      case 'Материалы':
        selectedItems.forEach((item) => deleteMaterial(item));
        break;

    }
    setSelectedItems([])
  }



  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: typeof data) => {
      setSelectedItems(selectedRowKeys as number[])
    }
  };

  const keys = data.length > 0 ? Object.keys(data[0]) : []
  const columns: TableColumnsType = keys?.slice(0, 4).map((item) => {
    return {
      title: item[0].toUpperCase() + item.slice(1),
      dataIndex: item,
    }
  })



  return (
    <div className={styles.root} >
      <div className={styles.header} >
        <h1 className={styles.title}>{name}</h1>
        <Button className={styles.addBtn} type='primary' onClick={() => navigate(`add`)} >Добавить</Button>
        {selectedItems?.length > 0 && <DeleteButton onConfirm={handleDelete} />}
      </div>
      {data.length > 0 && <Table rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }} className={styles.table} pagination={data.length > 18 && { pageSize: 18, position: ['bottomCenter'] }} onRow={(record) => ({ onClick: () => navigate(`${record.id}`) })} columns={columns} dataSource={data?.map((item) => { return { ...item, key: item.id as number } })} />}
    </div>
  )
}



