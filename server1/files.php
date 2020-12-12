<?php


function fileName($name)
{
    return [
        // A
        "about" => "../data/about.json",
        "aboutMin" => "../data/aboutMin.json",
        "advertising" => "../data/advertising.json",
        // B
        "banks" => "../data/banks.json",
        "blog" => "../data/news.json",
        // C
        "contact" => "../data/contact.json",
        "creditInfo" => "../data/creditInfo.json",
        "creditOrganizations" => "../data/creditOrganizations.json",
        "creditsTypes" => "../data/creditsTypes.json",
        // F
        "footer" => "../data/footer.json",
        // E
        "emails" => "../data/emails.json",
        // H
        "header" => "../data/header.json",
        // I
        "icons" => "../data/icons.json",
        // L
        "languages" => "../data/languages.json",
        // M
        "map" => "../data/map.json",
        // P
        "pages" => "../data/pages.json",
        // S
        "sign" => "../data/sign.json",
        "slider" => "../data/slider.json",
        "socIcons" => "../data/social-icons.json",
        // T
        "tels" => "../data/tels.json"

    ][$name];
}

;

function getContent($name)
{
    return json_decode(file_get_contents(fileName($name)), true);
}

function putContent($name, $content)
{
    return file_put_contents(fileName($name), json_encode($content));
}



function createPhotos($type, $items)
{
    $t = 0;
    if($type === "portfolio") {
        for ($i = 0; $i < count($items); $i++) {
            if ($items[$i]->img[0] !== "/") {
                $t++;
                $data = explode(',', $items[$i]->img)[1];
                $content = base64_decode($data);
                $name = "../../" . $type . "/" . $type . "-" . $items[$i]->id . ".jpg";
                $file = fopen($name, "wb");
                fwrite($file, $content);
                fclose($file);
            }

        }
    }else{
        if ($items[0]  !== "/") {

            $data = explode(',', $items )[1];
            $content = base64_decode($data);
            $name = "../../" . $type . "/" . $type   . ".jpg";
            $file = fopen($name, "wb");
            fwrite($file, $content);
            fclose($file);
        }
    }
    return $t;
}

