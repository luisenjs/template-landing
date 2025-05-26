import { useEffect, useState } from "react";
import { css } from "../../../styled-system/css";
import { container, stack, vstack } from "../../../styled-system/patterns";
import { HoverGlowBackground } from "../animations/hover-glow-background";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Content = {
    title: string;
    description: string;
    benefits: {
        image: string;
        title: string;
        description: string;
    }[];
}

export default function ProductSection(contenido: Content) {

    const [len, setLen] = useState<string | null>(null);

    useEffect(() => {
        setLen(localStorage.getItem("len"))
    })

    return (
        <section className={css({
            py: "20"
        })}>
            <div className={container({
                display: "flex",
                flexDir: "column",
                gap: "10"
            })}>
                <div>
                    <h2 className={css({
                        fontSize: "3xl",
                        fontWeight: 500,
                        color: "text",
                        transition: "all 0.2s"
                    })}>
                        {contenido.title}
                    </h2>
                    <p className={css({
                        fontSize: "xl",
                        color: "text",
                        transition: "all 0.2s"
                    })}>
                        {contenido.description}
                    </p>
                </div>
                <div className={stack({
                    flexDir: { base: "column", md: "row" }
                })}>
                    {
                        contenido.benefits.map((benefit, index) => (
                            <HoverGlowBackground key={index} round="lg">
                                <Card className={vstack({ h: "full" })} onClick={() => window.location.href = `/${len}/beneficio/${benefit.title.toLowerCase().split(" ").join("-")}`}>
                                    <CardHeader className={css({ w: "full" })}>
                                        <img src={benefit.image} alt={benefit.title} className={css({ maxH: "80", objectFit: "cover" })} />
                                        <CardTitle>
                                            {benefit.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </HoverGlowBackground>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}