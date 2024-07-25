
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchReader } from '@/store/features/readerSlice';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

function ReaderMolecule() {
  const dispatch = useAppDispatch()
  const isVisible = useAppSelector((state) => state.reader.isVisible);
  const title = useAppSelector((state) => state.reader.title);
  const author = useAppSelector((state) => state.reader.author);
  const file = useAppSelector((state) => state.reader.file);
  const reader = useAppSelector((state) => state.reader)

  console.log(isVisible);

  useEffect(() => {
      dispatch(fetchReader())
  }, []);

  let htmlString = "";

  if (reader.status == "succeeded" && isVisible) {
    const html = reader.reader[0]['htmlCode']
    htmlString = html as string;
    htmlString = htmlString.replace("{:songTitle}", title);
    htmlString = htmlString.replace("{:songAuthor}", author);
    console.log(file);
    htmlString = htmlString.replace("{:songPath}", file.realPath);
    console.log(htmlString);
    //html.replace(":songTitle", title);
  }
  return (
    <div style={{zIndex: "5000", bottom: '0'}}>{reader.status == "succeeded" && isVisible && <span>{parse(htmlString)}</span>}</div>
  )
}
export default ReaderMolecule