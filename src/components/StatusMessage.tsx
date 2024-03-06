type TStatusMessage = {
    status: string;
};

const StatusMessage = ({ status }: TStatusMessage) => {
    return (
        <div className="status-message">
            {status === "loading" ? (
                <p>Loading data process...</p>
            ) : (
                <p>Failed to load data...</p>
            )}
        </div>
    );
};

export default StatusMessage;
