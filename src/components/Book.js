function Book({ data: { isbn, title, subtitle, author, publisher, description } }) {

    return (
        <div className="card" id={isbn}>
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <h5>{subtitle}</h5>
                <div className="card-text">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th className="text-success font-weight-bold">Title:</th>
                                <th>{title}</th>
                            </tr>
                            <tr>
                                <th className="text-success font-weight-bold">Subtitle:</th>
                                <th>{subtitle}</th>
                            </tr>
                            <tr>
                                <th className="text-success font-weight-bold">Author:</th>
                                <th>{author}</th>
                            </tr>
                            <tr>
                                <th className="text-success font-weight-bold">Publisher:</th>
                                <th>{publisher}</th>
                            </tr>
                            <tr>
                                <th className="text-success font-weight-bold">Description:</th>
                                <th>{description}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Book