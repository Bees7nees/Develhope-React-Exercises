function AgeComponent({ age }) {
    return (
        <>
            {age > 18 ? <p>Your age is {age} :)</p> : <p>You are too young PAYASO</p>}
        </>
    );
}

export default AgeComponent;