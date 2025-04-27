import React from 'react'
import DynamicButton from './dynamic-button'

type Props = {}

const CTA = (props: Props) => {
    return (
        <section>
            <div className="container py-12 bg-black rounded-2xl text-white px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Begin Your Cricket Journey?</h2>
                    <p className="text-white/90 mb-8">
                        Join thousands of aspiring cricketers across India in this extraordinary talent hunt program.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <DynamicButton variant="primary" href="/register" className="bg-white text-orange-600 hover:bg-gray-100">
                            Register for Trials
                        </DynamicButton>
                        <DynamicButton variant="outline" href="/contact" className="border-white text-white hover:bg-white/10">
                            Contact Us
                        </DynamicButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA