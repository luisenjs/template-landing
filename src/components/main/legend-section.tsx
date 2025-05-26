import { css } from "../../../styled-system/css";
import { container, stack } from "../../../styled-system/patterns";

type Content = {
    title: string;
    description: string;
}

export default function LegendSection(contenido: Content) {
    return (
        <section className={css({
            bg: "white",
            py: "20"
        })}>
            <div className={container()}>
                <div className={stack({
                    flexDir: { base: "column", md: "row" },
                    justifyContent: "space-between"
                })}>
                    <h2 className={css({
                        fontSize: "3xl",
                        fontWeight: 500
                    })}>
                        {contenido.title}
                    </h2>
                    <p className={css({
                        fontSize: "xl",
                        maxW: { base: "full", md: "1/2" }
                    })}>
                        {contenido.description}
                    </p>
                </div>
            </div>
        </section>
    )
}