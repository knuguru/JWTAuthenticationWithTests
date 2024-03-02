import { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { act } from 'react-test-renderer';

export default CatFact = () => {
    const [catFactData, setCatFactData] = useState(undefined);
    const [randomInt, setRandomInt] = useState(0);

    useEffect(() => {
        fetch("https://cat-fact.herokuapp.com/facts")
            .then((response) => response.json())
            .then((data) => {
                act(() => {
                    setCatFactData(data);
                });
            });
        getRandomFactNum();
    }, []);

    function getRandomFactNum(){
        setRandomInt((catFactData && catFactData.length > 0) ? getRandomInt(0, catFactData.length - 1) : 0);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (catFactData === undefined) {
        return <Text>Loading...</Text>;
    }

    return (
        <View>
            {(catFactData && catFactData.length > 0) ? (
                <Text>{catFactData[randomInt].text}</Text>
            ) :
                (
                    <Text>No Cat Facts!</Text>
                )}

            <Button title="Give me another cat fact" onPress={getRandomFactNum} />
        </View>)
};