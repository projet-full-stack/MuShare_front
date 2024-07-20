import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchReader } from '@/store/features/readerSlice';
import parse from 'html-react-parser';
import React, { useEffect } from 'react'
import { PageProps } from '../../../../.next/types/app/layout';

function ReaderMolecule() {
  const dispatch = useAppDispatch()
  const reader = useAppSelector((state) => state.reader)

  useEffect(() => {
      dispatch(fetchReader())
  }, []);
  return (
    <div>{reader.status == "succeeded" && <span>{parse(reader.reader[0]['htmlCode'])}</span>}</div>
  )
}

export default ReaderMolecule