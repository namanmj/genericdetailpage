const apiurl = 'https://private-07900c-assignment1config.apiary-mock.com/questions';
async function getdata(){
    const response=await fetch(apiurl);
    const data=await response.json();
    console.log(data);

    const response2=await fetch(data.config.data_source.api);
    const data2=await response2.json();
    console.log(data2);
    document.getElementById("i").innerHTML=data2.response.data.title;
    document.getElementById("j").innerHTML=data.config.subtitle;
    document.getElementById("g").innerHTML=data2.response.data.section_left_title; 
    document.getElementById("h").innerHTML=data2.response.data.section_right_title;
    var value=data2.response.data;
    var c=0;
    for(let a of data.config.main_section_left.rows)
    {var save=a.rhs;
      var savelhs=a.lhs;
        
        let d=document.createElement('div');
        d.className='row';
        d.innerHTML=`
        <div class="col-sm-6">${a.lhs}</div>
        <div id="${savelhs}" class="col-sm-6">${add(value,save)}</div>
        `;
        
        document.querySelector('.container-left').appendChild(d);
        if(a.hasOwnProperty('edit'))
        {
          var x=document.getElementById(`${savelhs}`);
        x.contentEditable="true";
       
        }
        
        if(a.edit.hasOwnProperty('data_submit'))
        {
          let button1=document.createElement('BUTTON');
          let button=document.createElement('BUTTON');
          c=c+1;
          button.id=`${c}`;
          
        button.innerHTML = "SUBMIT";
        button1.innerHTML = "EDIT";
        document.querySelector('.container-left').appendChild(button);
        document.querySelector('.container-left').appendChild(button1);
        show(c,savelhs);
        }
    }
    
   
    for(let a of data.config.main_section_right.rows)
    {var save=a.rhs;
      var savelhs=a.lhs;
        let d1=document.createElement('div');
        d1.className='row';
        d1.innerHTML=`<div class="col-sm-6">${a.lhs}</div>
        <div id="${savelhs}" class="col-sm-6">${add(value,save)}</div>`;
        
        document.querySelector('.container-right').appendChild(d1);
        if(a.hasOwnProperty('edit'))
        {var x=document.getElementById(`${savelhs}`);
        x.contentEditable="true";
        if(a.edit.hasOwnProperty('data_submit'))
        {
          let button=document.createElement('BUTTON');
          c=c+1;
          button.id=`${c}`;
        button.innerHTML = "SUBMIT";
        document.querySelector('.container-right').appendChild(button);
        show(c,savelhs);
        }}
        if(a.hasOwnProperty('data_submit'))
        {
          let button=document.createElement('BUTTON');
          c=c+1;
          button.id=`${c}`;
        button.innerHTML = "SUBMIT";
        document.querySelector('.container-right').appendChild(button);
        show(c,savelhs);
        }
        }
       
    
    
    function add(value,save)
    {var arr1=save.split('.');
   
    for( var i=0;i<arr1.length;i++)
    {
        value=(value[arr1[i]]);
    }
    return value;
       
       
    }
    for(i=0;i<data.config.array_sections.length;i++)
    {var save3=data.config.array_sections[i].title;
        var array2=data.config.array_sections[i].data_array;
        if(i==0)
        firsttab(array2,save3);
        else
        createtab(array2,save3);
    } 
   
    for(i=0;i<data.config.array_sections.length;i++)
    {
    
        var arrayname=data.config.array_sections[i].data_array;
        
        for(let a of data.config.array_sections[i].rows)
        {save2=a.rhs;
            
            len=(value[arrayname].length);
            for(j=0;j<len;j++)
            {
                let d2=document.createElement('div');
                d2.className='row';
                d2.innerHTML=`<div class="col-sm-6">
                <strong> ${j+1}. <h7>${a.lhs}  </h7> :</strong> <h7>${value[arrayname][j][save2]}</h7>
              </div>`
              document.getElementById(`${arrayname}`).appendChild(d2);
              
            }
        }

        
    }
    function firsttab(array2,save3)
    {console.log(array2);
        
        let d4=document.createElement('LI');
        var concat=`${array2}`+"-tab";
        
        d4.innerHTML=`<a  class="nav-link active " id="${concat}" data-toggle="tab" href="#${array2}" role="tab" aria-controls="${array2}" aria-selected="true">${save3}</a>`
        document.getElementById('myTab').appendChild(d4);
       
        let d6=document.createElement('div');
        d6.innerHTML=`<div class="tab-pane fade show active" id="${array2}" role="tabpanel" aria-labelledby="${concat}">
        <div class="container">
           <div class="row">
              <div class="col-md-12 col-sm-12">
                  <div class="${array2}" >
                     <div class="row">
                        <div class="col-sm-12">
                            <div class="container">
                             <!--<div class="row">
                                
                              <div class="col-sm-6">
                                   <strong> 1. <h7 id="ee">  {key}  </h7> :</strong> <h7 id="ff">{value}</h7>
                                 </div>
                                
                                 <div class="col-sm-6">
                                   <strong>  <h7 id="gg">  {key}  </h7> :</strong> <h7 id="hh">{value}</h7>
                                </div>
                             </div>  
                             <div class="row">
                                 <div class="col-sm-6">
                                   <strong> 2. <h7 id="ii">  {key}  </h7> :</strong> <h7 id="jj">{value}</h7>
                                 </div>
                                 <div class="col-sm-6">
                                   <strong>  <h7 id="kk">  {key}  </h7> :</strong> <h7 id="ll">{value}</h7>
                                </div>
                             </div>  
                             <div class="row">
                                 <div class="col-sm-6">
                                   <strong> 3. <h7 id="mm">  {key}  </h7> :</strong> <h7 id="nn">{value}</h7>
                                 </div>
                                 <div class="col-sm-6">
                                   <strong>  <h7 id="oo">  {key}  </h7> :</strong> <h7 id="pp">{value}</h7>
                                </div>
                              </div>-->
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
           </div>
       </div>`
       document.querySelector('.tab-content').appendChild(d6);
    }
    function createtab(array2,save3)
    {console.log(array2);
    let d3=document.createElement('LI');
    var concat=`${array2}`+"-tab";
    d3.innerHTML=`<a  class="nav-link " id="${concat}" data-toggle="tab" href="#${array2}" role="tab" aria-controls="${array2}" aria-selected="false">${save3}</a>`
    document.getElementById('myTab').appendChild(d3);
    
    let d5=document.createElement('div');
    d5.innerHTML=`<div class="tab-pane fade" id="${array2}" role="tabpanel" aria-labelledby="${concat}">
    <div class="container">
       <div class="row">
          <div class="col-md-12 col-sm-12">
              <div class="${array2}" >
                 <div class="row">
                    <div class="col-sm-12">
                        <div class="container">
                          <div class="row">
                            
                          <!--<div class="col-sm-6">
                               <strong> 1. <h7 id="ee">  {key}  </h7> :</strong> <h7 id="ff">{value}</h7>
                             </div>
                            
                             <div class="col-sm-6">
                               <strong>  <h7 id="gg">  {key}  </h7> :</strong> <h7 id="hh">{value}</h7>
                            </div>
                         </div>  
                         <div class="row">
                             <div class="col-sm-6">
                               <strong> 2. <h7 id="ii">  {key}  </h7> :</strong> <h7 id="jj">{value}</h7>
                             </div>
                             <div class="col-sm-6">
                               <strong>  <h7 id="kk">  {key}  </h7> :</strong> <h7 id="ll">{value}</h7>
                            </div>
                         </div>  
                         <div class="row">
                             <div class="col-sm-6">
                               <strong> 3. <h7 id="mm">  {key}  </h7> :</strong> <h7 id="nn">{value}</h7>
                             </div>
                             <div class="col-sm-6">
                               <strong>  <h7 id="oo">  {key}  </h7> :</strong> <h7 id="pp">{value}</h7>
                            </div>
                          </div>-->
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        
       </div>
   </div>`
   document.querySelector('.tab-content').appendChild(d5);
}
  function show(c,savelhs)
{
  var p=document.getElementById(c);
  
  
  
  p.addEventListener("click", async function(){
    let d1 =document.getElementById(`${savelhs}`).innerHTML;
    var d2=parseInt(d1);
    var m1={[savelhs] : d1};
    var lenn=d1.length;
    console.log(lenn);
    var b=data.config.main_section_left.rows[c-1].edit;
    if(b.hasOwnProperty('constraints'))
    {var min=data.config.main_section_left.rows[0].edit.constraints.min_length;
      var max=data.config.main_section_left.rows[0].edit.constraints.max_length;
      var min1=parseInt(data.config.main_section_left.rows[1].edit.constraints.min);
      var max1=parseInt(data.config.main_section_left.rows[1].edit.constraints.max);
      if(c==1)
      {
      if(lenn>=min&&lenn<=max)
    {
    const r = await fetch(data.config.main_section_left.rows[c-1].edit.data_submit.api, {
      method: data.config.main_section_left.rows[c-1].edit.data_submit.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(m1)
    });
    console.log(r);
    }
    else{
      alert(`length should be greater than ${min} and less than ${max}`);
      
    }
  }
    if(c==2)
    {
if(d2>=min1&&d2<=max1)
{
  const r = await fetch(data.config.main_section_left.rows[c-1].edit.data_submit.api, {
    method: data.config.main_section_left.rows[c-1].edit.data_submit.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(m1)
  });
  console.log(r);
}
else{
  alert(`input should be greater than ${min1} and less than ${max1}`);
}
    
    }
  }
    else{
      const r = await fetch(data.config.main_section_left.rows[c-1].edit.data_submit.api, {
        method: data.config.main_section_left.rows[c-1].edit.data_submit.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(m1)
      });
      console.log(r);
    }
    


  });
}
$('#loader').addClass("hide-loader");
}
    getdata();
    