import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchReader } from '@/store/features/readerSlice';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

function ReaderMolecule() {
  const dispatch = useAppDispatch()
  const isVisible = useAppSelector((state) => state.reader.isVisible);
  const reader = useAppSelector((state) => state.reader)


  useEffect(() => {
      dispatch(fetchReader())
  }, []);
  return (
    <div>{reader.status == "succeeded" && isVisible && <span>{parse(reader.reader[0]['htmlCode'])}</span>}</div>
  )
}

export default ReaderMolecule