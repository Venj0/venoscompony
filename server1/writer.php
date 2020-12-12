<?php

class Write
{
    public function __construct()
    {

    }

    public function socIcon($soc)
    {
        $pages = getContent("pages");
        $pages[4]["socIcons"] = $soc;
        return putContent("pages", $pages);
    }

    public function Contacts($contacts)
    {
        $pages = getContent("pages");

        $pages[4]["tels"] = $contacts->tels;
        $pages[4]["emails"] = $contacts->emails;
//        var_dump($pages);
        return putContent("pages", $pages);
    }

    public function portfolio($items)
    {
        $pages = getContent("pages");
        $isHaveNew = createPhotos("portfolio", $items);
        if ($isHaveNew) {
            for ($i = 0; $i < count($items); $i++) {
                $items[$i]->img = "/portfolio/portfolio-" . $i . ".jpg";
            }
        }
        $pages[3]["items"] = $items;

        return putContent("pages", $pages);
    }
    public function about($about)
    {
        $pages = getContent("pages");
        createPhotos("about", $about->img);
        $about->img = "/about/about.jpg";
        $pages[1]  = $about;

        return putContent("pages", $pages);
    }


}
