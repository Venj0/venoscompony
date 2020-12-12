<?php


class Reader
{
    public function __construct()
    {
    }

    private $files = [
        "header" => "./data/header",
        "contact" => "./data/contact.json",
        "languages" => "./data/languages.json",
        "socIcons" => "./data/social-icons.json",
        "footer" => "./data/footer.json",
        "varksTypes" => "./data/varksTypes.json",
        "blog" => "./data/news.json",
        "aboutMin" => "./data/aboutMin.json",
        "about" => "./data/About",
        "banks" => "./data/banks.json",
        "sign" => "./data/sign.json",
        "slider" => "./data/slider.json",
        "creditsTypes" => "./data/creditsTypes.json",
        "creditOrganizations" => "./data/creditOrganizations.json",
    ];

    public function header()
    {
        $header = $this->get("header");

        $header["top"]["contact"] = ($header["top"]["contact"]) ? $this->get("contact") : [];
        $header["top"]["languages"] = ($header["top"]["languages"]) ? $this->get("languages") : [];
        $header["top"]["socIcons"] = ($header["top"]["socIcons"]) ? $this->get("socIcons") : [];


        return $header;
    }

    public function footer()
    {
        $footer = $this->get("footer");

        $footer["contact"] = ($footer["contact"]) ? $this->get("contact") : [];
        $footer["socIcons"] = ($footer["socIcons"]) ? $this->get("socIcons") : [];

        return $footer;
    }

    public function varksTypes()
    {
        return $this->get("varksTypes");
    }

    public function aboutMin()
    {
        return $this->get("aboutMin");
    }

    public function sign()
    {
        return $this->get("sign");
    }

    public function slider()
    {
        return $this->get("slider");
    }

    public function languages()
    {
        return $this->get("languages");
    }
    public function top()
    {
        $header = $this->get("header");
        return $header["top"];
    } public function logo()
    {
        $header = $this->get("header");
        return $header["logo"];
    }
    public function sectors()
    {
        $header = $this->get("header");
        return $header["sectors"];
    }

    //    public function banks()
//    {
//        return $this->get("banks");
//    }

//    public function creditOrganizations()
//    {
//        return $this->get("creditOrganizations");
//    }

    public function credits($arr)
    {
        $credits = $this->get("creditsTypes");
        $data = [];
        for ($i = 0; $i < count($arr); $i++) {
            $data[$i] = $credits[$arr[$i]];
        }
        return $data;

    }

    public function about()
    {
        $about = $this->get("about");

        if ($about["blocks"][1]["data"] && $about["blocks"][1]["visible"]) $about["blocks"][1]["data"] = $this->get("contact");
        if ($about["blocks"][2]["data"] && $about["blocks"][2]["visible"]) $about["blocks"][2]["data"] = $this->get("socIcons");
        if ($about["blocks"][3]["data"] && $about["blocks"][3]["visible"]) $about["blocks"][3]["data"] = $this->get("banks");
        if ($about["blocks"][4]["data"] && $about["blocks"][4]["visible"]) $about["blocks"][4]["data"] = $this->get("creditOrganizations");

        return $about;
    }

    public function blog($count)
    {
        $blog = $this->get("blog");
        $items = [];
//        var_dump($count);
        if ($count === "") $count = $blog["homeCount"];
        $t = 0;
        for ($i = 0; $i < $count; $i++) {
            if (isset($blog["items"][$i])) {
                $items[$t++] = $blog["items"][$i];
            }
        }
        $blog["items"] = $items;
        return $blog;
    }

    public function banks()
    {
        return [
            "banks" => $this->get("banks"),
            "credOrg" => $this->get("creditOrganizations")
        ];


    }


    public function blogItem($url)
    {
//        var_dump($url);
        $blog = $this->get("blog");
        for ($i = 0; $i < count($blog["items"]); $i++) {
            if (isset($blog["items"][$i]["url"]) and $blog["items"][$i]["url"] === $url) return $blog["items"][$i];
        }
        return ["id" => -1, "massage" => "item not found"];
    }

    public function bankItem($url)
    {
//        var_dump($url);
        $banks = $this->get("banks");
        for ($i = 0; $i < count($banks); $i++) {
            if (isset($banks[$i]["url"]) and $banks[$i]["url"] === $url) return $banks[$i];
        }
        $banks = $this->get("creditOrganizations");
        for ($i = 0; $i < count($banks); $i++) {
            if (isset($banks[$i]["url"]) and $banks[$i]["url"] === $url) return $banks[$i];
        }
        return ["id" => -1, "massage" => "item not found"];
    }

    private function get($name)
    {
        return json_decode(file_get_contents($this->files[$name]), true);
    }


}
//$reader = new Reader();