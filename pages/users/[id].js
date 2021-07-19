import React from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/user.module.scss';
import MainContainer from '../../components/MainContainer';

export default function ({ user }) {
  const { query } = useRouter();
  console.log('router', query);

  return (
    <MainContainer>
      <div className={style.user}>
        <h1>Пользователь c id: {query.id}</h1>
        <p>Имя пользователя - {user.name}</p>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  console.log('params: ', params);
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();
  return {
    props: { user },
  };
}
