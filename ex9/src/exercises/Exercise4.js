function Title({ text }) {
    return <h3>{text}</h3>;
}

function Description({ text }) {
    return <p>{text}</p>;
}

function Image({ url }) {
    return <img src={url} alt="FPT" />;
}

function SimpleCard({ item }) {
    return (
        <div className="simple-card">
            <Image url={item.imageUrl} />

            <div className="card-info">
                <Title text={item.title} />
                <Description text={item.description} />
            </div>
        </div>
    );
}

function Exercise4() {
    const item = {
        title: "Hoai Nguyen - FPT DaNang",
        description: "Mobile: 0982827763",
        imageUrl: "/images/fpt.png"
    };

    return <SimpleCard item={item} />;
}

export default Exercise4;