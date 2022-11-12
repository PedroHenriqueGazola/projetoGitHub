import LoadingSpin from "react-loading-spin";

export default function Loading() {
    return (
        <div className="flex justify-center items-center">
            <LoadingSpin primaryColor='#77c5c5' />
        </div>
    );
}