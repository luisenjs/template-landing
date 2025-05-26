import { css } from "../../../styled-system/css";
import { Card } from "../ui/card";

type Content = {
    front: React.ReactNode;
    back: React.ReactNode;
}

export default function FlipCard(contenido: Content) {
    return (
        <div className={css({ perspective: "1000px", w: "full", h: "full" })}>
            <div
                className={css({
                    w: "full",
                    h: "full",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s ease-in-out",
                    _hover: { transform: "rotateY(180deg)" },
                })}
            >
                <Card shadowBorder="subtle" className={css({
                    w: "full",
                    h: "full",
                    backfaceVisibility: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                })}>
                    {contenido.front}
                </Card>
                <Card shadowBorder="subtle"
                    className={css({
                        position: "absolute",
                        top: "0",
                        w: "full",
                        h: "full",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    })}
                >
                    {contenido.back}
                </Card>
            </div>
        </div>
    );
};
