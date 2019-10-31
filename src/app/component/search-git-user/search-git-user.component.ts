import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GitUserData } from './../../shared/GitUser.service'
declare var $;
@Component({
  selector: 'app-search-git-user',
  templateUrl: './search-git-user.component.html',
  styleUrls: ['./search-git-user.component.css']
})
export class SearchGitUserComponent implements OnInit {
  usersData:any=[];
  constructor(private gitUserServiceCall:GitUserData) { }
  selectedUsersDetails:any;
  userFollower:number;
  userFollows:number;
  showRepoDetails:boolean;
  follower:any;
  follows:any;
  selectedRepo:any;
  @ViewChild('repoDataTable') table : ElementRef;
  dataTable: any;
  dtOptions: any;
  ngOnInit() {
    this.dtOptions={
      "processing": true,
      "pageLength": 10,
      "pagingType": "full_numbers",
      "lengthMenu": [[ 5, 10, 20, 50,-1 ],[ 5, 10, 20, 50,"All" ]],
      "retrieve": true
    };
    this.usersData=[];
    //Api Call for getting the user from Git
    this.gitUserServiceCall.getUserDetails(0).subscribe((data:{})=>{
      this.usersData=data;
    });
    
  }
  //key used for displaying the username
  keyword = 'login';
  //when the item is selected this function will be invoked
  selectEvent(item) {
    this.selectedUsersDetails={};
    this.userFollower=0;
    this.userFollows=0;
    this.follower=[];
    this.follows=[];
    this.selectedRepo=[];
    this.showRepoDetails=false;
    this.selectedUsersDetails=item;
    $("#selectedUser").addClass("d-none");
    this.gitUserServiceCall.setUser(this.selectedUsersDetails.login);
    setTimeout(() => {
      //Api call for getting the followers
      this.gitUserServiceCall.getFollowers().subscribe((data:{})=>{
        this.follower=data;
        this.userFollower=this.follower.length;
      });
      //Api call for getting the Following
      this.gitUserServiceCall.getFollows().subscribe((data:{})=>{
        this.follows=data;
        this.userFollows=this.follows.length;
      });
      //Api call for getting the Repo Details
      this.gitUserServiceCall.getRepoData().subscribe((data:{})=>{
        this.selectedRepo=data;
      });
      
    });
  }
 //when Search Parameter changes this function is invoked
  onChangeSearch(val: string) {
    $("#selectedUser").addClass("d-none");
  }
  // to show the repodetails
  showRepos(){
    this.showRepoDetails=true;
    $("#selectedUser").removeClass("d-none");
    setTimeout(() => {
      //Initializing DataTables
      this.dataTable=$(this.table.nativeElement);
      this.dataTable.dataTable(this.dtOptions);
      $(".dataTables_wrapper").css("margin-top","20px");
    });
  }
}

