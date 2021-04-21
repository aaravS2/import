class SearchBox{
    constructor(PositionX,PositionY,Width,Height,displayedText,hrefX,hrefY,linkhtml,borderRadius){
    this.search=createInput(displayedText)
    this.PositionX=PositionX
    this.PositionY=PositionY
    this.Width=Width
    this.Height=Height
    this.hrefX=hrefX
    this.hrefY=hrefY
    this.linkhtml=linkhtml
    this.borderRadius=borderRadius
    }
        URLsearch(){
        push()
        this.search.position(this.PositionX,this.PositionY)
        this.search.style('width',this.Width+'px')
        this.search.style('Height',this.Height+'px')
        this.search.style('border-radius',this.borderRadius+'px')
        this.href=createA("https://"+this.search.value(),this.linkhtml)
        this.href.position(this.hrefX,this.hrefY)
        pop()
    }
    QUERYsearch(){
        push()
        this.search.position(this.PositionX,this.PositionY)
        this.search.style('width',this.Width+'px')
        this.search.style('Height',this.Height+'px')
        this.search.style('border-radius',this.borderRadius+'px')
        this.SplitQuery=split(this.search.value(),'+')
        for (var i=0;i<this.SplitQuery.length;i++) {
            for (var b=0;b<i;b++) {
            this.href1=createA('https://www.google.com/search?q='+this.SplitQuery[i]+'&rlz=1C5CHFA_enIN908IN908&oq='+this.SplitQuery[b]+'+&aqs=chrome.1.69i57j0l9.47625j0j7&sourceid=chrome&ie=UTF-8',this.linkhtml)
            this.href1.position(this.hrefX,this.hrefY)
            }
        }
        pop()
    }
}