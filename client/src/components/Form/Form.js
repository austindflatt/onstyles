import React, { useState } from 'react'
import { Textarea, TextInput, Button } from '@mantine/core';
import FileBase from 'react-file-base64';
import styles from '../../reducers/styles';
import { useDispatch } from 'react-redux';
import { createStyle } from '../../actions/styles'

const Form = () => {
    const [styleData, setStyleData] = useState({
        creator: '', 
        title: '', 
        brand: '', 
        model: '', 
        colorway: '', 
        tags: '', 
        selectedFile: ''
    });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createStyle(styleData));

    }
    const clear = () => {

    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
        <TextInput
        name="creator"
        label="Creator"
        value={styleData.creator}
        onChange={(e) => setStyleData({ ...styleData, creator: e.target.value })}
        />
        <TextInput
        name="title"
        label="Title"
        value={styleData.title}
        onChange={(e) => setStyleData({ ...styleData, title: e.target.value })}
        />
        <TextInput
        name="brand"
        label="Brand"
        value={styleData.brand}
        onChange={(e) => setStyleData({ ...styleData, brand: e.target.value })}
        />
        <TextInput
        name="model"
        label="Model"
        value={styleData.model}
        onChange={(e) => setStyleData({ ...styleData, model: e.target.value })}
        />
        <TextInput
        name="colorway"
        label="Colorway"
        value={styleData.colorway}
        onChange={(e) => setStyleData({ ...styleData, colorway: e.target.value })}
        />
        <TextInput
        name="tags"
        label="Tags"
        value={styleData.tags}
        onChange={(e) => setStyleData({ ...styleData, tags: e.target.value })}
        />
        <FileBase
        type="file"
        multiple={false}
        onDone={({base64}) => setStyleData({ ...styleData, selectedFile: base64 })}
        />
        <Button
        variant="gradient" 
        gradient={{ from: 'orange', to: 'red' }}
        type="submit"
        >
        Add Style</Button>
        <Button
        color="red"
        onClick={clear}
        >
        Clear</Button>
        </form>
    )
}

export default Form
