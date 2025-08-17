import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  
  blogs: any[] = [];

  private API_URL = 'https://api.hashnode.com/';
  public USERNAME = 'itsPriyanshuRaj';  

  constructor(private http: HttpClient) {}

  // Angular version of gql()
  gql(query: string, variables: any = {}) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.API_URL, {
      query,
      variables
    }, { headers });
  }

  ngOnInit(): void {
    const query = `
      query GetBlogs($page: Int!) {
        user(username: "itsPriyanshuRaj") {
          publication {
            posts(page: $page) {
              title
              brief
              slug
              coverImage
            }
          }
        }
      }
    `;

     this.gql(query, { page: 0 }).subscribe({
      next: (res) => {
        this.blogs = res.data.user.publication.posts;
        console.log("res", res);
      },
      error: (err) => {
        console.error("Error fetching blogs:", err);
      }
    });
  }
}
