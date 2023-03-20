import Button from './Button'
function WideCard() {
    return (
        <div className="py-8 text-center">
            <h1 className="text-4xl">Find it first on Indiegogo.</h1>
            <h1 className="my-4">
                Indiegogo is where early adopters and innovation seekers find
                lively, imaginative tech before it hits the mainstream.
            </h1>
            <div className="mt-4">
                <Button solid> SIGN UP NOW</Button>
                <Button outline> LEARN MORE</Button>
            </div>
        </div>
    )
}

export default WideCard
