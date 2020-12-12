<?php


class Reader
{

public function start(){
    return array(
        "languages"=>getContent("languages"),
        "pages"=>getContent("pages")
    );
}
    public function languages()
    {
        return getContent("languages");
    }

    public function pages()
    {
        return getContent("pages");
    }

    public function about()
    {
        return getContent("pages")[1];
    }
    public function contacts()
    {
        return array(
            "tels"=>getContent("pages")[4]["tels"],
            "emails"=>getContent("pages")[4]["emails"],

        );

    }
    public function socIcons()
    {
        return getContent("pages")[4]["socIcons"];

    } public function portfolio()
    {
        return getContent("pages")[3]["items"];

    }public function icons()
    {
        return getContent("icons") ;

    }
}