import React, { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from 'utils/validation';
import { getCurrentUserData } from 'utils/getCurrentUserData';
import { transformStr } from 'utils/transformStr';
import { TextArea } from 'components/ui/TextArea';
import axios from 'axios';
import styles from './Form.module.scss';
import { AppContext } from 'context';

export const Form = () => {
  const { userData, clearUserData } = React.useContext(AppContext);
  const [user, setUser] = useState(userData);
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    shouldUnregister: true,
    resolver: yupResolver(formSchema),
  });

  const fetchUpdateData = (user) => {
    try {
      axios
        .put(`https://626119a9e7361dff91ff44b3.mockapi.io/users/${user.id}`, user)
        .then((_) => alert(`Данные пользователя ${user.name} успешно изменены!`));
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (userInfo) => {
    const editedUserData = {
      id: user.id,
      name: userInfo.name,
      username: userInfo.username,
      email: userInfo.email,
      address: {
        street: userInfo.street,
        city: userInfo.city,
        zipcode: userInfo.zipcode,
      },
      phone: userInfo.phone,
      website: userInfo.website,
      company: {
        name: userData.company.name,
      },
      comment: userInfo.comment,
    };

    console.log(editedUserData);

    editedUserData && setUser(editedUserData);
    fetchUpdateData(editedUserData);
    setIsEdit(false);
  };

  const enableEditForm = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const currentUserData = getCurrentUserData(userData);

  return (
    <>
      <div className={styles.formHeader}>
        <h2>Профиль пользователя</h2>
        <Button text='upper' onClick={enableEditForm}>
          {isEdit ? 'Отменить' : 'редактировать'}
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formContent}>
          {currentUserData.map((objData) => {
            let prop = Object.keys(objData)[0];

            return (
              <Fragment key={prop}>
                <Controller
                  control={control}
                  name={prop}
                  defaultValue={objData[prop]}
                  render={({ field }) => (
                    <Input
                      labelText={`${transformStr(prop)}:`}
                      label={prop}
                      register={register}
                      required
                      disabled={!isEdit}
                      className={`${errors[prop]?.message && styles.error}`}
                      {...field}
                    />
                  )}
                />
                <p className={styles.errorText}>{errors[prop]?.message}</p>
              </Fragment>
            );
          })}

          <Controller
            control={control}
            name={'comment'}
            defaultValue={user.comment}
            render={({ field }) => (
              <TextArea
                labelText={'Comment:'}
                label={'comment'}
                register={register}
                disabled={!isEdit}
                className={styles.textArea}
                {...field}
              />
            )}
          />
        </div>

        <div className={styles.sendBtn}>
          <Button
            variant={isEdit ? 'success' : 'disabled'}
            text='upper'
            type='submit'
            disabled={!isEdit}
            className={styles.sendBtn}
          >
            отправить
          </Button>
        </div>
      </form>

      <div className='back-btn'>
        <Button text='upper' onClick={() => clearUserData()}>
          к списку
        </Button>
      </div>
    </>
  );
};
